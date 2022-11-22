import React from 'react'
import './about.css'
import '../header.css';
import ME3 from '../../images/ME3.png';

const About = () => {
    return (
        <section id='about'>
            <h1>About</h1>
            <div>
                <h3>
                    I'm a full stack developer, Brazilian living in Canada, passionate and dedicated to my work. I absolutely love what I do and have a great interest for front-end!
                    I'm eager to learn and to improve my skills!
                </h3>
                <div className='me'>
                    <img src={ME3} alt="me"/>
                </div>
            </div>
            </section>
        
    )
}

export default About;