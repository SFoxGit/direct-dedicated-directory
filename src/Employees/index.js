import React from 'react';
import Table from 'react-bootstrap/Table';


function Employees(props) {
let thName;
  if (props.icon === "Name") {thName = <i className="fas fa-sort-down"/>}
  if (props.icon === "NameD") {thName = <i className="fas fa-sort-up"/>}
  if (props.icon === "Email") {
  var thEmail = <i className="fas fa-sort-up"/>
  }
  

  return (
    <Table striped bordered hover variant="dark" className="sortable">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={() => props.handlePageChange("Name")}>Name<span>{thName}</span></th>
          <th onClick={() => props.handlePageChange("Email")}>Email<span>{thEmail}</span></th>
          <th onClick={() => props.handlePageChange("ID")}>ID</th>
          <th onClick={() => props.handlePageChange("Phone")}>Phone</th>
          <th onClick={() => props.handlePageChange("DOB")}>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
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
