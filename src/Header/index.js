import React from "react";
import { FormControl } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Header(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" >Direct Dedicated Directory</div>
        <Form inline>
          <FormControl 
          value={props.search}
          onChange={props.handleSearchSave} 
          type="text" 
          placeholder="Search By Name" 
          className="mr-sm-2" />
        </Form>
      </div>
    </nav>
  )
};

export default Header;