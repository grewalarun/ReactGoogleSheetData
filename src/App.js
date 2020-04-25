import React from 'react';
import './App.css';
import GoogleData from './Components/Google/GoogleData';
import AddNew from './Components/Google/AddNew';


import {BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function App() {
  return (
<div className="App">
<Router>

<div className="App">
  <div className="App-header">

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>Google Sheet</Navbar.Brand>
  <Navbar id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link activeClassName="active" as={Link} to="/">Oscar Movies</Nav.Link>
      <Nav.Link activeClassName="active" as={Link} to="/AddNew">Add New Entry</Nav.Link>
     
    </Nav>

  </Navbar>
</Navbar>
      </div>
<div className="container-fluid pt-3">
<Switch>
<Route path="/" exact strict component={GoogleData}/>
<Route path="/AddNew" exact strict component={AddNew}/>
</Switch>
  </div>    
  
    </div>
</Router>


</div>
  );
}

export default App;
