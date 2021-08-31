import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
class Navigation extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        const { kullanici } = this.props;
        if(kullanici == undefined) {
           return (
               <>
               </>
          )
        }
        else
        return (
            <>
                 <Navbar bg="dark" variant="dark" className="p-2">
                    <Navbar.Brand href="/">Login Todo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto my-2 my-lg-0 float-right" style={{ maxHeight: '50px' }} navbarScroll>
                            <Nav.Link  href="/">Anasayfa</Nav.Link>
                            <Nav.Link  href="/kullanicipage">Kullanıcı Listesi</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav className="mr-auto my-2 my-lg-0 float-right" style={{ maxHeight: '50px' }} navbarScroll>
                             <NavDropdown className="float-right" title={ kullanici.AD + " " + kullanici.SOYAD} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="javascript();">Profil Bilgileri</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="./login">Çıkış Yap</NavDropdown.Item>
                            </NavDropdown> 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </>
        );
    }
}

const connectedNavigate = connect()(Navigation);
export { connectedNavigate as Navigation };

export default Navigation;