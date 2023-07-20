// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Link className="navbar-brand" to='/'>
        <img alt="" src={'/images/RFlogo.png'} width="60" height="60"/>{' '}
      </Link>
      <Nav>
        <Link className="nav-link" to='/category/espejos' style={{ fontSize: '1.15em' }}>Espejos</Link>
        <NavLink className="nav-link" to='/category/escritorios' style={{ fontSize: '1.15em' }}>Escritorios</NavLink>
        <NavLink className="nav-link" to='/category/estanterias' style={{ fontSize: '1.15em' }}>Estanterias</NavLink>
        <NavLink className="nav-link" to='/category/percheros' style={{ fontSize: '1.15em' }}>Percheros</NavLink>
        <NavLink className="nav-link" to='/category/contacto' style={{ fontSize: '1.15em' }}>Contacto</NavLink>
      </Nav>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <NavLink to='/category/cartwidget'><CartWidget/></NavLink>
      </Nav>
    </Navbar>
  )
}

export default NavBar;