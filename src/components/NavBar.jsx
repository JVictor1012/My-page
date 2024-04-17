import {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import github from '../assets/img/github.svg';

export const NavBar = () => {

    const [activelink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if (window.scroll > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
        }, [])

    const onUpdateActiveLink = (value) => {
        setActivelink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#habilidades" className={activelink === 'habilidades' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
                    <Nav.Link href="#project" className={activelink === 'projetos' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
                </Nav>
                
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/joão-victor-nunes-b743ba235/"><img src={navIcon1}/></a>
                        <a href="https://wa.me/5584998996339"><img src={whatsapp}/></a>
                        <a href="https://github.com/jvictor1012"><img src={github}/></a>
                    </div>
                    <button class="vdd" onclick="window.location.href='https://wa.me/5584998996339'">
                      <span>Vamos nos Conectar!</span>
                    </button>

                </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBar;