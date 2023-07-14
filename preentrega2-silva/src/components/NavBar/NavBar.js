// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary mb-3">
      <NavLink to='/'>
        <img alt="" src={'/images/RFlogo.png'} width="60" height="60" className="d-inline-block align-top"/>{' '}
      </NavLink>
      <Nav className="">
        <Link to='/espejos' style={{ fontSize: '1.15em' }}>Espejos</Link>
        <NavLink to='/escritorios' style={{ fontSize: '1.15em' }}>Escritorios</NavLink>
        <NavLink to='/estanterias' style={{ fontSize: '1.15em' }}>Estanterias</NavLink>
        <NavLink to='/percheros' style={{ fontSize: '1.15em' }}>Percheros</NavLink>
        <NavLink to='/contacto' style={{ fontSize: '1.15em' }}>Contacto</NavLink>
      </Nav>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <NavLink to='/cartwidget'><CartWidget/></NavLink>
      </Nav>
    </Navbar>
  )
}

export default NavBar;


// import {Link, NavLink} from 'react-router-dom';


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//      <div className='navbar_logo'><Logo/></div>
//      <Link to='/' className='btn-btn-success'>Home</Link>
//      <Link to='/pc' className='btn-btn-success'>Computadoras</Link>
//      <Link to='/celulares' className='btn-btn-success'>Celulares</Link>
//      <NavLink to='/otros' className='btn-btn-success'>Otros</NavLink>
//      <Link to='/cart' className='btn-btn-success'><CartWidget/></Link>
//     </nav>
//   );
// };

// export default Navbar;