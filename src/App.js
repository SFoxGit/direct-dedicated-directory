import React, { Component } from "react";
import Header from "./Header";
import Employees from "./Employees"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: [],
      prevSort: "",
      search: "",
      searchEmp: [],
    };
  };

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
  };

  handleSearch = event => {
    this.setState({search: event.target.value})
    const query = this.state.search;
    console.log(query);
    if (query.length > 0) {
      const prevArr = this.state.employees;
      let searchArr = prevArr.filter(function(employee) {
        const empName = [employee.name[0].toLowerCase(), employee.name[1].toLowerCase()];
        console.log(empName.some((fullName) => fullName.includes(query)));
        return empName.some((fullName) => fullName.includes(query))
      });
      console.log(searchArr);
      this.setState({searchEmp: searchArr});
    }
  }

  handlePageChange = sortBy => {
    const prevArr = this.state.employees;
    const lastSort = this.state.prevSort;
    let asc;
    let desc;
    if (sortBy !== lastSort) {
      asc = 1;
      desc = -1;
    } else {
      asc = -1;
      desc = 1;
    };
    console.log(lastSort, sortBy, asc, desc)
    if (sortBy === "Name") {
      const newArr = prevArr.sort((a, b) => {
        let fa = a.name[1].toLowerCase();
        let fb = b.name[1].toLowerCase();
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      let newSort;
      if (asc === 1) {
        newSort = "Name"
      } else {
        newSort = "";
      };
      this.setState({
        employees: newArr,
        prevSort: newSort
      })
    }

    if (sortBy === "Email") {
      const newArr = prevArr.sort((a, b) => {
        let fa = a.email.toLowerCase();
        let fb = b.email.toLowerCase();
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      let newSort;
      if (asc === 1) {
        newSort = "Email"
      } else {
        newSort = "";
      };
      this.setState({
        employees: newArr,
        prevSort: newSort
      })
    }

    if (sortBy === "ID") {
      const newArr = prevArr.sort((a, b) => {
        let fa = a.id;
        let fb = b.id;
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      let newSort;
      if (asc === 1) {
        newSort = "ID"
      } else {
        newSort = "";
      };
      this.setState({
        employees: newArr,
        prevSort: newSort
      })
    }

    if (sortBy === "Phone") {
      const newArr = prevArr.sort((a, b) => {
        let fa = a.phone;
        let fb = b.phone;
        if (fa < fb) {
          return desc;
        };
        if (fb < fa) {
          return asc;
        };
        return null;
      });
      let newSort;
      if (asc === 1) {
        newSort = "Phone"
      } else {
        newSort = "";
      };
      this.setState({
        employees: newArr,
        prevSort: newSort
      })
    }

    if (sortBy === "DOB") {
      const newArr = prevArr.sort((a, b) => {
        let fa = new Date(a.dob).getFullYear();
        let fb = new Date(b.dob).getFullYear();
        let ma = new Date(a.dob).getMonth();
        let mb = new Date(b.dob).getMonth();
        let da = new Date(a.dob).getDate()
        let db = new Date(b.dob).getDate()
        if (fa < fb) {
          return desc;
        } else if (fb < fa) {
          return asc;
        } else if (ma < mb) {
          return desc;
        } else if (mb < ma) {
          return asc;
        } else if (da < db) {
          return desc;
        } else if (db < da) {
          return asc;
        } else {
          return null;
        }
      });
      let newSort;
      if (asc === 1) {
        newSort = "DOB"
      } else {
        newSort = "";
      };
      this.setState({
        employees: newArr,
        prevSort: newSort
      })
    }
  };

  render() {
    const { error, isLoaded, employees, searchEmp } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header 
          handleSearch={this.handleSearch}
          />
          <Employees
            handlePageChange={this.handlePageChange}
            employees={searchEmp.length ? searchEmp : employees}
          />
        </>
      );
    }
  }
}

export default App;
