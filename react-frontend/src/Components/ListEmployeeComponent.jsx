import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
 constructor(props) {
    super(props)

    this.state = {
        employees: []
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
 }

 editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
 }

 componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data});
    });
 }
 // Employee method
 addEmployee() {
    this.props.history.push('/add-employee'); // To call route add-employee
 }

 render() {
  return (
   <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
            <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        </div>
        <div className="row">
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> Employees First Name</th>
                        <th> Employees Last Name</th>
                        <th> Employees Email Id</th>
                        <th> Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                                <td>
                                    <button onClick = { () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
   </div>
  );
 }
}

export default ListEmployeeComponent;
