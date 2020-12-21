import React, {useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap/'

function Navbr({currentPage, setPage}) {
    
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <header className="flex-row px-1 mb-3">

            <h2 className='align'>
                <p className='size1'>Cristian Turbeville</p>
            </h2>

            <Navbar collapseOnSelect expand="lg" variant="dark" className='mb-3'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Nav.Link onClick={() => setPage('About Me')} className={`navLinks ${currentPage === 'About Me' && `navActive`}`}>About Me</Nav.Link>
                        <Nav.Link onClick={() => setPage('Contact')} className={`navLinks ${currentPage === 'Contact' && `navActive`}`}>Contact</Nav.Link>
                        <Nav.Link onClick={() => setPage('Projects')} className={`navLinks ${currentPage === 'Projects' && `navActive`}`}>Projects</Nav.Link>
                        <Nav.Link onClick={() => setPage('Resume')} className={`navLinks ${currentPage === 'Resume' && `navActive`}`}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </header>
    );
}

export default Navbr;