package com.ems.emsbackend.Controller;

import com.ems.emsbackend.Model.Employee;
import com.ems.emsbackend.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    // Inject repository
    @Autowired
    private EmployeeRepository employeeRepository;

    // Get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();

    }
}
