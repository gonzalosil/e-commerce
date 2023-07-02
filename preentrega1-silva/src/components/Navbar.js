import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
              alt=""
              src={'RFlogo.png'}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
              alt=""
              src={'RFlogo.png'}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link href="#inicio" style={{ fontSize: '1.15em' }}>Inicio</Nav.Link>
                  <Nav.Link href="#espejos" style={{ fontSize: '1.15em' }}>Espejos</Nav.Link>
                  <Nav.Link href="#escritorios" style={{ fontSize: '1.15em' }}>Escritorios</Nav.Link>
                  {/* <NavDropdown.Divider /> */}
                  <Nav.Link href="#estanterias" style={{ fontSize: '1.15em' }}>Estanterias</Nav.Link>
                  <Nav.Link href="#percheros" style={{ fontSize: '1.15em' }}>Percheros</Nav.Link>
                  <Nav.Link href="#contacto" style={{ fontSize: '1.15em' }}>Contacto</Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#cartwidget" style={{ fontSize: '1.15em' }}><CartWidget/></Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
