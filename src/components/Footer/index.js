import React from 'react';
import { Container } from 'react-bootstrap';
import { GoMarkGithub } from "react-icons/go";
import { DiStackoverflow } from "react-icons/di"
import { GrLinkedin } from "react-icons/gr"

function Footer() {

    return (

        <footer>
            <Container className='footer'>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://github.com/WoodwindCDT"><GoMarkGithub className='svgLink' color="white" size={50} /></a>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://stackoverflow.com/users/13763943/cristian-turbeville"><DiStackoverflow className='svgLink' color="white" size={50} /></a>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/cristian-turbeville-542965164/"><GrLinkedin className='svgLink' color="white" size={50} /></a>
            </Container>
        </footer>

    )
}

export default Footer;