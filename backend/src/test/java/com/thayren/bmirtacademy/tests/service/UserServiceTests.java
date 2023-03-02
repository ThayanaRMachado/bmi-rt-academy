package com.thayren.bmirtacademy.tests.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.thayren.bmirtacademy.dto.UserDTO;
import com.thayren.bmirtacademy.dto.UserUpdateDTO;
import com.thayren.bmirtacademy.entities.User;
import com.thayren.bmirtacademy.repositories.UserRepository;
import com.thayren.bmirtacademy.services.UserService;
import com.thayren.bmirtacademy.services.exceptions.ResourceNotFoundException;
import com.thayren.bmirtacademy.tests.factory.UserFactory;

@ExtendWith(SpringExtension.class)
public class UserServiceTests {

	@InjectMocks
	private UserService service;

	@Mock
	private UserRepository repository;

	private long existingId;
	private long nonExistingId;
	private String password;
	private User user;
	private PageImpl<User> page;

	@Mock
	private BCryptPasswordEncoder passwordEncoder;

	@BeforeEach
	void setUp() throws Exception {

		existingId = 1L;
		nonExistingId = 1000L;
		password = "$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG";
		user = UserFactory.createUser();
		page = new PageImpl<>(List.of(user));

		Mockito.when(repository.find(ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(page);

		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(user));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(user);

		Mockito.when(repository.getOne(existingId)).thenReturn(user);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);
		Mockito.when(passwordEncoder.encode(ArgumentMatchers.anyString())).thenReturn(password); // Usado no método
																									// update.

		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);

	}

	@Test
	public void deleteShouldDoNothingWhenIdExists() {
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}

	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistingId);
	}

	@Test
	public void findAllPagedShouldReturnPage() {
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);

		Page<UserDTO> result = service.findAllPaged(name, pageRequest);

		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());
		Mockito.verify(repository, Mockito.times(1)).find(name, pageRequest);
	}

	@Test
	public void findByIdShouldReturnUserDTOWhenIdExists() {

		UserDTO result = service.findById(existingId);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).findById(existingId);
	}

	@Test
	public void findByShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).findById(nonExistingId);
	}

	@Test
	public void updateShouldReturnUserDTOWhenIdExists() {

		UserUpdateDTO dto = new UserUpdateDTO();

		UserDTO result = service.update(existingId, dto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).getOne(existingId);
	}

	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		UserUpdateDTO dto = new UserUpdateDTO();

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, dto);
		});

		Mockito.verify(repository, Mockito.times(1)).getOne(nonExistingId);
	}

}
