import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


function Employees(props) {




  return (
    <Table striped bordered hover variant="dark" className="sortable">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={() => props.handlePageChange("Name")}>Name</th>
          <th onClick={() => props.handlePageChange("Email")}>Email</th>
          <th onClick={() => props.handlePageChange("ID")}>ID</th>
          <th onClick={() => props.handlePageChange("Phone")}>Phone</th>
          <th onClick={() => props.handlePageChange("DOB")}>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.map(employee => (
          <tr key={employee.id}>
            <td><img src={employee.picture} alt="failed to load"></img> </td>
            <td>{employee.name[0]} {employee.name[1]}</td>
            <td>{employee.email}</td>
            <td>{employee.id}</td>
            <td>{employee.phone}</td>
            <td>{new Date(employee.dob).getMonth() + 1}/{new Date(employee.dob).getDate()}/{new Date(employee.dob).getFullYear()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


// { employee.name } { employee.email } { employee.dob } { employee.phone } { employee.id } { employee.picture }
export default Employees;
