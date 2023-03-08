package main.java.com.ems.emsbackend.Repository;

import main.java.com.ems.emsbackend.Model.Employee;

// Extends JpaRepository to expose the code to database methods like find by id, delete by id etc
// Reduce boilerplate code required to develop DAO layer
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
}
