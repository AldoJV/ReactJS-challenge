import React from 'react'
import * as axios from 'axios'
import { IndexLink, Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, MenuItem, FormGroup, FormControl, InputGroup, Button, Glyphicon} from 'react-bootstrap'
import brandLogo from './assets/logo.png'
import './Header.scss'

var words;
var search = function(e) {
  e.preventDefault();

  if(words == null){
    words = "";
  }
  var url = " https://restcountries.eu/rest/v1/name/" + words;
  axios.get(url)
  .then(function (response) {
    console.log(response.data);
    var msg, i;
    var countries = [];
    for(i in response.data){
      var country = response.data[i];
      countries.push(country.name);
      
    }
    msg = countries.join(", ");
    alert("Success! The countries found are: " + msg);


  })
  .catch(function (error) {
    console.log(error);
    alert("Sorry, no countries were found with this search terms :(");
  });
}

var prepareSearch = function(e) {
  words = e.target.value;

}

export const Header = () => (
  <div className="row">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/"><img
          src={brandLogo} />
        </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} >SHOP</NavItem>
          <NavItem eventKey={2} href="#">TEAM</NavItem>
          <NavItem eventKey={3} href="#">EVENTS</NavItem>
          <NavItem eventKey={4} href="#">COMPANY</NavItem>
          <LinkContainer to='/contact'>
            <NavItem eventKey={5} href="#">CONTACT</NavItem>
          </LinkContainer>

        </Nav>
        <Nav pullRight>
          
          <Navbar.Form>
            <FormGroup >
              <form onSubmit={search}>
                <InputGroup>
                  <FormControl type="text" placeholder="SEARCH" onChange={prepareSearch}/>
                  <InputGroup.Addon>
                    <button type="submit">
                      <Glyphicon glyph="search" />
                    </button>
                  </InputGroup.Addon>
                </InputGroup>
              </form>
            </FormGroup>
            {''}
            
          </Navbar.Form>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

)

export default Header
