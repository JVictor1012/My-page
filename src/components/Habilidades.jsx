import { Col, Container, Row } from "react-bootstrap";

import logo1 from "../assets/img/react-logo.svg";
import logo2 from "../assets/img/api-logo.svg";
import logo3 from "../assets/img/angular-logo.svg";
import logo4 from "../assets/img/postgresql-logo.svg";
import logo5 from "../assets/img/mongodb-logo.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
              <p>Um pouco do que sei fazer</p>
              <Carousel responsive={responsive} infinite={true} className="slider-habilidades" >
                <div className="item">
                  <img src={logo1} alt="image" style={{ width: '204px', height: '204px' }}/>
                  <h5>React Js.</h5>
                </div>
                <div className="item">
                  <img src={logo2} alt="image" style={{ width: '204px', height: '204px' }} />
                  <h5>Api Rest</h5>
                </div>
                <div className="item">
                  <img src={logo3} alt="image" style={{ width: '204px', height: '204px' }}/>
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={logo4} alt="image" style={{ width: '204px', height: '204px' }}/>
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={logo5} alt="image" style={{ width: '204px', height: '204px' }}/>
                  <h5>MongoDB</h5>
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