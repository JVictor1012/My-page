import { useEffect, useState } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Desenvolvedor Web", "Web Designer", "UX/UI Designer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta,setDelta] = useState(400 - Math.random() * 100)
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();

        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0, text.lenght - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
        
        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else {
            setIndex(prevIndex => prevIndex +1);
        }
    }


    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Bem vindo ao meu portfolio!
                        </span>
                        <h1>{` Oi! eu sou João! `}<span className="wrap">{text}</span></h1>
                        <p>Olá! Sou João, sou desenvolvedor Fullstack e um entusiasta da tecnologia apaixonado por criar soluções inovadoras. estou constantemente buscando novos desafios que me permitam expandir meus conhecimentos e contribuir para projetos significativos. Vem me conhecer!</p>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img id="imagem-banner" src={headerImg} alt="header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;