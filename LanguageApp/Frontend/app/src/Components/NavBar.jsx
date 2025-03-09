import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.svg';
import './NavBar.css';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#html" className={activeLink === 'html' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('html')}>HTML</Nav.Link>
            <Nav.Link href="#css" className={activeLink === 'css' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('css')}>CSS</Nav.Link>
            <Nav.Link href="#javascript" className={activeLink === 'javascript' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('javascript')}>JAVASCRIPT</Nav.Link>
            <Nav.Link href="#php" className={activeLink === 'php' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('php')}>PHP</Nav.Link>
            <Nav.Link href="#python" className={activeLink === 'python' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('python')}>PYTHON</Nav.Link>
            <Nav.Link href="#java" className={activeLink === 'java' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('java')}>JAVA</Nav.Link>
            <Nav.Link href="#c" className={activeLink === 'c' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('c')}>C</Nav.Link>
            <Nav.Link href="#cpp" className={activeLink === 'cpp' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cpp')}>C++</Nav.Link>
            <Nav.Link href="#sql" className={activeLink === 'sql' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sql')}>SQL</Nav.Link>
         </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;