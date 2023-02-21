import React from 'react';

import './index.css';

import logo from '../../img/logo_rainha.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarAll = () => {
  return (
    <>
      <Navbar className="container-navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} className="logo-navbar" alt="logo rainha da antiga religião" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="config-navbar">
              <Nav.Link>
                <Link className="links-navbar" to="/">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="links-navbar" to="/quem-somos">
                  Quem Somos
                </Link>
              </Nav.Link>
              <NavDropdown className="dropdown-title" id="basic-nav-dropdown" title="Artigos">
                <a
                  className="link-orientacao"
                  target="_blank"
                  href="https://drive.google.com/file/d/1Tfbni9NLAT3UZTDMtFFP41uQytotjWxY/view"
                  rel="noreferrer"
                >
                  Orietanções de Participacão
                </a>

                <NavDropdown.Item>
                  <Link className="links-navbar" to="/importancia-da-dieta">
                    Importância da Dieta
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="links-navbar" to="/linktree">
                  Cursos
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarAll;
