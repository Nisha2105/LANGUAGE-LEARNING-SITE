import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import './NavBar2.css';

export const NavBar2 = () => {
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
    <Navbar expand="lg" className={`navbar2 ${scrolled ? "scrolled": ""}`}>
      <Container>
        
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

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar2;