import React from 'react'
import './about.css'
import ME2 from '../../images/ME2.png';
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaGraduationCap} from 'react-icons/fa'


const About = () => {
    return (
        <section id='about'>
            <h2>About me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__image'>
                        <img src={ME2} alt="about img"/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>HTML, CSS, JS, React, Node.js, Express, npm, Bootstrap, MySql, MongoDb </small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                        <article className='about__card'>
                            <FaGraduationCap className='about__icon'/>
                            <h5>Background</h5>
                            <small>Coding Bootcamp Graduate</small>
                        </article>
                    </div>
                    <p>
                    I'm a full stack developer, Brazilian living in Canada, passionate and dedicated to my work. I absolutely love what I do and have a great interest for front-end!
                    I'm eager to learn and to improve my skills!
                    </p>
                </div>
            </div>
        </section>
        
    )
}

export default About;