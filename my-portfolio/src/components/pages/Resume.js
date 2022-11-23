import React from 'react'
import './resume.css'
import CV from '../../assets/Resume.pdf'
const Resume = () => {
    return (
        <section id='resume' className='container'>
         <h2>My Resume</h2>
            <p>I’m a Full Stack Developer with a background in Civil Engineering. Enthusiastic, passionate and used to work with
targets and deadlines. As a professor, I bring leadership and teamwork skills, along with great communication. As a civil
engineer, I learned to develop strategies for engagement and work with tight schedules. Moreover, I’m eager to learn and
continuously improving my skills as a developer, therefore, I believe that my skills would be extremely valuable to help
companies meet their goals</p>
            <div className='cv'>
                <a href={CV} download className='btn'>Download CV</a>
            </div>
        </section>
    )
}

export default Resume;