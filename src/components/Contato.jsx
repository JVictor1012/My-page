import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';

export const Contato = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(firstName === '' || emailValue === '' || message === ''){
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const templateParams = {
            from_name: firstName + ' ' + lastName,
            email: emailValue,
            phone: phone,
            message: message
        }

        emailjs.send("service_51eua5n", "template_uivvw78", templateParams, "roKI3UwED4dQO6WTw")
        .then((response) => {
            console.log("enviado! ", response.status, response.text);
            setFirstName('');
            setLastName('');
            setEmailValue('');
            setPhone('');
            setMessage('');
            setButtonText('Sent');
            setStatus({ success: true, message: "Mensagem enviada com sucesso." });
        })
        .catch((error) => {
            console.log("ERRO! ", error);
            setStatus({ success: false, message: 'Houve um erro. Tente novamente mais tarde.' });
        });
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Entre em Contato"/>
                    </Col>
                    <Col>
                        <h2>Entre em Contato</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={firstName} placeholder="Nome" onChange={(e) => setFirstName(e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={lastName} placeholder="Sobrenome" onChange={(e) => setLastName(e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={emailValue} placeholder="Email" onChange={(e) => setEmailValue(e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={phone} placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={message} placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status && (
                                    <Col>
                                        <p className={status.success ? "success" : "danger"}>{status.message}</p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contato;
