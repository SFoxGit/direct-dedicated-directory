import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


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

  handlePageChange = sortBy => {
    const prevArr = this.state.employees
    if (sortBy === "Name") {
      const newArr = prevArr.sort((a, b) => {
        let fa = a.name[1].toLowerCase();
        let fb = b.name[1].toLowerCase();
        if (fa < fb) {
          return -1;
        };
        if (fb < fa) {
          return 1;
        };
        return null;
      } );
      this.setState({employees: newArr}) 
      console.log()
    }
    if (sortBy === "Email") {
      console.log('Email')
    }
    if (sortBy === "ID") {
      console.log('ID')
    }
    if (sortBy === "Phone") {
      console.log('Phone')
    }
    if (sortBy === "DOB") {
      console.log('DOB')
    }
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
        <Table striped bordered hover variant="dark" className="sortable">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={() => this.handlePageChange("Name")}>Name</th>
              <th onClick={() => this.handlePageChange("Email")}>Email</th>
              <th onClick={() => this.handlePageChange("ID")}>ID</th>
              <th onClick={() => this.handlePageChange("Phone")}>Phone</th>
              <th onClick={() => this.handlePageChange("DOB")}>DOB</th>
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
