import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import '../App.css';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
     }
 
     toggle = () => {
         this.setState({
             isOpen: !this.state.isOpen
         });
    }
    render() {
            return (
            <div className="main-nav">
                <Navbar color="black" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Eister-Hargrave
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="http://www.eister-hargrave.net/html/estaterecords.html">
                                        Estate Records

                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </Container>


                </Navbar>
            </div>
            );
            
        }
}



export default AppNavbar;