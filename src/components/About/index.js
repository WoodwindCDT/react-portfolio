import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function About() {

    return (
        <>
            <div className='mb-3 underline'><h1>About Me</h1></div>
            <Row >
                <Col lg={4}><Image src={require(`../../assets/images/me.png`)} thumbnail/></Col>
                <Col lg={8}> 
                    <p className='bio'>
                    I'm a student learning Full Stack Web Development. Since the age of 10, I have been intertwined with computers. I began by admiring how they worked, stepped up to the plate to build one, and later began my adventure to expel the knowledge into a career. My primary aspect with computers began with the compatibility of the hardware and sooner then later the software.
                    Trouble-shooting hardware/software issues became second hand and ever quicker, I began taking courses on coding. I took on coding to enhance my knowledge, as I knew the computer from top to bottom, but to learn the fabrics of the computer was my next obstacle. Furthermore, after applying to my second job, I finally got to utilize years of experience. I currently work at Best Buy as an "Advanced Repair Agent," making my day to day schedules persist of constant troubleshooting, analyzing, and digesting software/hardware issues. With this work, I come face to face with many of technologies issues, and aim to document, isolate, and successfully replenish the device(s) to their original intent. Along with this, helping many clients throughout the day, suggesting which technologies will best suit them, is an extremely common occurrence. As well, I am a certified Apple Technician, comprehending and forging up-to-date knowledge from the iOS, hardware, and even satisfactory product analysis within Apples' Global Service Exchange. In addition, communication skills come hand in hand with my job, as not only do I communicate between many coworkers to tackle tasks, whether it's talking over the phone or in person with a client, I strive to fully understand, comprehend, and conglomerate the issue present and ahead of me.
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default About;