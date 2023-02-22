package com.thayren.bmirtacademy.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.bmirtacademy.dto.TrainerDTO;
import com.thayren.bmirtacademy.entities.Trainer;
import com.thayren.bmirtacademy.repositories.TrainerRepository;

@Service
public class TrainerService {

	@Autowired
	private TrainerRepository repository;

	@Transactional(readOnly = true)
	public Page<TrainerDTO> findAllPaged(String name, PageRequest pageRequest) {
		Page<Trainer> list = repository.find(name, pageRequest);
		Page<TrainerDTO> listDto = list.map(trainer -> new TrainerDTO(trainer));

		return listDto;
	}

	@Transactional(readOnly = true)
	public TrainerDTO findById(Long id) {
		Optional<Trainer> obj = repository.findById(id);
		Trainer entity = obj.get();

		return new TrainerDTO(entity);
	}

	@Transactional
	public TrainerDTO insert(TrainerDTO trainerDto) {
		Trainer entity = new Trainer();
		copyDtoToEntity(trainerDto, entity);
		entity = repository.save(entity);

		return new TrainerDTO(entity);
	}

	@Transactional
	public TrainerDTO update(Long id, TrainerDTO trainerDto) {
		Trainer entity = repository.getOne(id);
		copyDtoToEntity(trainerDto, entity);
		entity = repository.save(entity);

		return new TrainerDTO(entity);
	}

	private void copyDtoToEntity(TrainerDTO trainerDto, Trainer entity) {
		entity.setName(trainerDto.getName());
		entity.setAge(trainerDto.getAge());
		entity.setCpf(trainerDto.getCellPhone());
		entity.setCellPhone(trainerDto.getCellPhone());
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

}
