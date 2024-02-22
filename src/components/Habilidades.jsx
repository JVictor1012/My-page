import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Habilidades = () =>{

  const responsive = {
    superLargeDesktop: {
    
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="habilidade" id="habilidadades">
      <Container>
        <Row>
          <Col>
            <div className="habilidade-bx">
              <h2>
                Habilidades
              </h2>
              <p>mude as imagens daqui depois ok? </p>
              <Carousel responsive={responsive} infinite={true} className="slider-habilidades" >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Desenvolvimento Front-end</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Desenvolvimento Back-end</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Bancos de dados</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Testes e Autenticação</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )

}

export default Habilidades;