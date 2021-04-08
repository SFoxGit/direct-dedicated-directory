import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Moment from 'moment';


class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=24&inc=name,email,dob,phone,id,picture&nat=us")
      .then(res => res.json())
      .then(
        (result) => {
          result.results.forEach(employee => {
            employee.name = [employee.name.first, employee.name.last];
            employee.dob = employee.dob.date;
            employee.id = employee.id.value;
            employee.picture = employee.picture.thumbnail
          })
          this.setState({
            isLoaded: true,
            employees: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, employees } = this.state;
    console.log(employees)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Phone</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td><img src={employee.picture} alt="Failed to load"></img> </td>
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
  }
}

// { employee.name } { employee.email } { employee.dob } { employee.phone } { employee.id } { employee.picture }
export default Employees;

/* <div className="container">
<div className="row">
{employees.map(employee => (
  <div className="col-xs-12 col-md-4 mt-4">
    < Card style={{ width: '18rem' }} key={employee.id} className="h-100">
      <Card.Img variant="top" src={employee.picture} />
      <Card.Body>
        <Card.Title>{employee.name[0]} {employee.name[1]}</Card.Title>
        <Card.Text>
          <ul>
            <li>ID: {employee.id}</li>
            <li>Email: {employee.email}</li>
            <li>Phone: {employee.phone}</li>
            <li>DOB: {new Date(employee.dob).getMonth() + 1}/{new Date(employee.dob).getDate()}/{new Date(employee.dob).getFullYear()}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
))
}
</div>
</div> */