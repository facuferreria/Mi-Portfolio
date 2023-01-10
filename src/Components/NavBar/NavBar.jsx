import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../../assets/brand-logo.svg';
import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.nav}>
      <Container fluid>
        <Navbar.Brand href="#home"><img src={brand} alt= "brand logo" className={styles.logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`${styles.nav_options} me-auto`}>
            <Nav.Link className={styles.nav_link} href="#home">INICIO</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/#about">SOBRE MI</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/#proyects">PROYECTOS</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/#contact">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar