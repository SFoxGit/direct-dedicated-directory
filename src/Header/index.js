import React from "react";
import { FormControl, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Header(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Direct Dedicated Directory</a>
        <Form inline>
          <FormControl 
          value={props.search}
          onChange={props.handleSearch} 
          type="text" 
          placeholder="Search" 
          className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </nav>
  )
};

export default Header;