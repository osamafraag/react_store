import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { LanguageContext } from '../../context/language';
import { ThemeContext } from '../../context/theme';
import { useContext } from "react";

function HeaderNav() {
  const { contextLang , setContextLang }  = useContext(LanguageContext)
  const { contextTheme , setContextTheme }  = useContext(ThemeContext)
  const cartContentAmount = useSelector((state) => state.cart.cartContentAmount);
  return (
    
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand>Products App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link my-auto me-5'>
              <select className="form-select " aria-label="Default select example" onChange={(event) => setContextTheme(event.target.value)}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
              </select>
            </NavLink>
            <NavLink className='nav-link my-auto me-5'>
              <select className="form-select " aria-label="Default select example" onChange={(event) => setContextLang(event.target.value)}>
                <option value="EN">EN</option>
                <option value="AR">AR</option>
                <option value="FR">FR</option>
              </select>
            </NavLink>
            <NavLink className='nav-link my-auto' 
            style={({ isActive }) => (isActive ? {color: 'green', textDecoration : 'underline'} : {color: 'black'})} 
            to='/'>Home
            </NavLink>
            <NavLink className='nav-link my-auto' 
            style={({ isActive }) => (isActive ? {color: 'green', textDecoration : 'underline'} : {color: 'black'})} 
            to="/register">Register
            </NavLink>
            <NavLink className='nav-link my-auto' 
            style={({ isActive }) => (isActive ? {color: 'green', textDecoration : 'underline'} : {color: 'black'})} 
            to="/login">Login
            </NavLink>
            <NavLink className='nav-link fs-1 my-auto' 
            style={({ isActive }) => (isActive ? {color: 'green'} : {color: 'white'})} 
            to="/cart">
              <div className='position-relative' style={{width:'50px', height:'50px'}}>
                <h1 className='w-25 h-25  position-absolute text-danger fs-5 end-0 top-0'>{cartContentAmount}</h1>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;