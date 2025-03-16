import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
/*import { useNavigate} from 'react-router-dom';*/
import { MoonFill, Search } from "react-bootstrap-icons";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
   /* const navigate = useNavigate();*/

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
        <Navbar.Brand href="#home" className='logo'>
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <div className="search">
              <input type="text" placeholder="Search" />
                 <span className="icon">
                    <Search size={17}/>
                 </span>
           </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <div className="right-items">
            <span className='moon'>
              <MoonFill size={25}/>
            </span>
            <span className='navbar-text'>
              <button className='vvd' onClick={() => navigate("/login")}>
                <Link to="/login" className="navbar-link"><span>Login</span></Link></button>
              <button className='vvdd' onClick={() => navigate("/signup")}>
                <Link to="/signup" className="navbar-link"><span>Sign Up</span></Link></button>
            </span>
          </div>    
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;