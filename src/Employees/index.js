import React from 'react';
import Table from 'react-bootstrap/Table';


function Employees(props) {
let thName;
let thEmail;
let thID;
let thPhone;
let thDOB;

//Series of If statements to determine where to show the icon for what was sorted
  if (props.icon === "Name") {thName = <i style={{color: "white"}} className="fas fa-arrow-alt-square-down"/>}
  if (props.icon === "NameD") {thName = <i style={{color: "white"}} className="fas fa-arrow-alt-square-up"/>}
  if (props.icon === "Email") {thEmail = <i style={{color: "white"}} className="fas fa-arrow-alt-square-down"/>}
  if (props.icon === "EmailD") {thEmail = <i style={{color: "white"}} className="fas fa-arrow-alt-square-up"/>}
  if (props.icon === "ID") {thID = <i style={{color: "white"}} className="fas fa-arrow-alt-square-down"/>}
  if (props.icon === "IDD") {thID = <i style={{color: "white"}} className="fas fa-arrow-alt-square-up"/>}
  if (props.icon === "Phone") {thPhone = <i style={{color: "white"}} className="fas fa-arrow-alt-square-down"/>}
  if (props.icon === "PhoneD") {thPhone = <i style={{color: "white"}} className="fas fa-arrow-alt-square-up"/>}
  if (props.icon === "DOB") {thDOB = <i style={{color: "white"}} className="fas fa-arrow-alt-square-down"/>}
  if (props.icon === "DOBD") {thDOB = <i style={{color: "white"}} className="fas fa-arrow-alt-square-up"/>}
  
  return (
    <Table striped bordered hover variant="dark" className="sortable">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={() => props.handlePageChange("Name")}>Name <span>{thName || <i className="fas fa-sort"></i>}</span></th>
          <th onClick={() => props.handlePageChange("Email")}>Email <span>{thEmail || <i className="fas fa-sort"></i>}</span></th>
          <th onClick={() => props.handlePageChange("ID")}>Employee ID <span>{thID || <i className="fas fa-sort"></i>}</span></th>
          <th onClick={() => props.handlePageChange("Phone")}>Phone <span>{thPhone || <i className="fas fa-sort"></i>}</span></th>
          <th onClick={() => props.handlePageChange("DOB")}>DOB <span>{thDOB || <i className="fas fa-sort"></i>}</span></th>
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
