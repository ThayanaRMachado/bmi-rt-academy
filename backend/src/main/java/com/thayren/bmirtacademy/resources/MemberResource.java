package com.thayren.bmirtacademy.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.thayren.bmirtacademy.dto.MemberDTO;
import com.thayren.bmirtacademy.services.MemberService;

@RestController
@RequestMapping(value = "/members")
public class MemberResource {

	@Autowired
	private MemberService service;

	@GetMapping
	public ResponseEntity<Page<MemberDTO>> findAllPaged(@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy) {

		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);

		Page<MemberDTO> list = service.findAllPaged(name.trim(), pageRequest);

		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<MemberDTO> findById(@PathVariable Long id) {
		MemberDTO memberDto = service.findById(id);
		return ResponseEntity.ok().body(memberDto);
	}

	@PostMapping
	public ResponseEntity<MemberDTO> insert(@RequestBody MemberDTO memberDto) {
		memberDto = service.insert(memberDto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(memberDto.getId())
				.toUri();
		return ResponseEntity.created(uri).body(memberDto);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<MemberDTO> update(@PathVariable Long id, @RequestBody MemberDTO memberDto) {
		memberDto = service.update(id, memberDto);
		return ResponseEntity.ok().body(memberDto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<MemberDTO> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}