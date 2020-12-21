import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function Portfolio() {
    //projects that will be mapped over to be displayed on page
    const [Projects] = useState([
        {
            name: 'Tech Blog',
            source: 'tech-blog.png',
            link: 'https://github.com/WoodwindCDT/Tech-Blog'
        },
        {
            name: 'Note Pro',
            source: 'note-pro.png',
            link: 'https://github.com/WoodwindCDT/notePro'
        },
        {
            name: 'Budget Tracker',
            source: 'budget-tracker.png',
            link: 'https://github.com/WoodwindCDT/budget-tracker'
        }, {
            name: 'Team Generator',
            source: 'team.png',
            link: 'https://github.com/WoodwindCDT/teamGenerator'
        },
        {
            name: 'Nebula Edu',
            source: 'nebula-edu.jpg',
            link: 'https://enigmatic-sea-17171.herokuapp.com/'
        },
        {
            name: 'Space Dash',
            source: 'space-dash.jpg',
            link: 'https://team-incredibles.github.io/Group-Project/'
        },
        {
            name: 'Portfolio',
            source: 'portfolio.png',
            link: 'https://github.com/WoodwindCDT/codingPortfolio'
        },
        {
            name: 'Coding Quiz',
            source: 'coding-quiz.png',
            link: 'https://github.com/WoodwindCDT/codingQuiz'
        }
    ])

    return (
        <>
        <div  className='mb-3 underline'><h1>My Projects</h1></div>
        <Row className='justify-content-center'>
            {Projects.map((project, i) => (
                <Col lg={12} xl={4} className='mb-3' key={i}>
                    <a  href={project.link} rel="noopener noreferrer" target='_blank'>
                        <div className='imgContainer'>
                            <img
                                src={require(`../../assets/projects/${project.source}`)}
                                alt={project.name}
                                className="imgThumbnail"
                            />
                            <div className='overlay'>
                                <div className='description'>{project.name}</div>
                            </div>
                        </div>
                    </a>

                </Col>
            ))}
        </Row>
        </>

    );

}

export default Portfolio