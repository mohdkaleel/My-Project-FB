package com.Project.employee_management.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.Project.employee_management.entity.Employee;
import com.Project.employee_management.repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    // CREATE
    public Employee saveEmployee(@NonNull Employee employee) {
        return repository.save(employee);
    }

    // READ ALL
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // READ BY ID
    public Employee getEmployeeById(@NonNull Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new NoSuchElementException("Employee not found with id: " + id));
    }

    // UPDATE
    public Employee updateEmployee(@NonNull Long id, @NonNull Employee employee) {
        Employee existing = getEmployeeById(id);

        existing.setFirstName(employee.getFirstName());
        existing.setLastName(employee.getLastName());
        existing.setEmail(employee.getEmail());
        existing.setAge(employee.getAge());
        existing.setMobileNumber(employee.getMobileNumber());
        existing.setDepartment(employee.getDepartment());

        return repository.save(existing);
    }

    // DELETE
    public void deleteEmployee(@NonNull Long id) {
        if (!repository.existsById(id)) {
            throw new NoSuchElementException("Employee not found with id: " + id);
        }
        repository.deleteById(id);
    }
}
