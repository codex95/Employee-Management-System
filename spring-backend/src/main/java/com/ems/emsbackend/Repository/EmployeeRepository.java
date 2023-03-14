package com.ems.emsbackend.Repository;

import com.ems.emsbackend.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Extends JpaRepository to expose the code to database methods like find by id, delete by id etc
// Reduce boilerplate code required to develop DAO layer
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
