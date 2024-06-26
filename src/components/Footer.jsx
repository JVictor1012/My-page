import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import github from '../assets/img/nav-icon3.svg';

export const Footer = () =>{

    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <Col size={12} sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href="https://www.linkedin.com/in/joão-victor-nunes-b743ba235/"><img src={navIcon1} alt="Icon" /></a>
                    <a href="https://wa.me/5584998996339"><img src={whatsapp}/></a>
                    <a href="https://github.com/jvictor1012"><img src={github}/></a>
                    </div>
                    <p>Copyright 2022. Todos os direitos Reservados</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;