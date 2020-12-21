import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'
import { Row, Col, Form, Container } from 'react-bootstrap';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <div className='mb-3 underline'><h1>Contact Me!</h1></div>
            <p className='mb-3'>Howdy! If you'd like to contact me, reach me at my <a rel="noopener noreferrer" target='_blank' href="mailto:cristian@lonestarlogic.net">Email</a></p>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Form.Group controlId="Form.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="John Doe" defaultValue={name} onBlur={handleChange} name="name" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group controlId="Form.ControlInput2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" defaultValue={email} name="email" onBlur={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={12}>
                        <Form.Group controlId="Form.ControlTextarea3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control className='size4' as="textarea" rows={6} name="message" defaultValue={message} onBlur={handleChange}/>
                        </Form.Group>
                    </Col>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    
                </Row>
                <div className='centered'><button className='gitBtn' type="submit" onSubmit={handleSubmit}>Submit</button></div>
            </Container>
        </>
    )
}

export default Contact;