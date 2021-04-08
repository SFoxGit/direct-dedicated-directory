import React from "react";
import { Dropdown, FormControl, Button } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'

function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Direct Dedicated Directory</a>
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Date of Birth</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Phone Number</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ID</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </nav>
  )
};

export default Header;