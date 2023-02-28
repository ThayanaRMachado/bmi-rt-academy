package com.thayren.bmirtacademy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thayren.bmirtacademy.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
