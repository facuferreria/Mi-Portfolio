import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import brand from '../../assets/brand-logo.svg';
import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <Navbar key='xl' expand='xl' className={styles.nav}>
        <Container fluid>
            <Navbar.Brand href="#home"><img src={brand} alt= "brand logo" className={styles.logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                    <img src={brand} alt= "brand logo" className={styles.logo}  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`${styles.nav_options} flex-grow-1 pe-3 `}>
                  <Nav.Link className={styles.nav_link} href="/#home">INICIO</Nav.Link>
                  <Nav.Link className={styles.nav_link} href="/#about">SOBRE MI</Nav.Link>
                  <Nav.Link className={styles.nav_link} href="/#proyects">PROYECTOS</Nav.Link>
                  <Nav.Link className={styles.nav_link} href="/#contact">CONTACTO</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  );
}

export default NavBar