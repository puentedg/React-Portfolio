import React from 'react'
import './resume.css'
import CV from '../../assets/Resume.pdf'
import {MdEngineering} from 'react-icons/md'
import {FiTarget} from 'react-icons/fi'
import {AiOutlineComment} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'



const Resume = () => {
    return (
        <section id='resume' className='container container_cv'>
         <h2>My Resume</h2>
         <div className='cv'>
                <a href={CV} download className='btn'>Download CV</a>
            </div>
            <p>I’m a Full Stack Developer with a background in Civil Engineering!</p>
            <MdEngineering className='icons'/>
            <p> Enthusiastic, passionate and used to work with targets and deadlines. </p>
            <FiTarget className='icons'/>
            <p>As a professor, I bring leadership and teamwork skills, along with great communication.</p>     
            <AiOutlineComment className='icons'/>
            <p>As a civil engineer, I learned to develop strategies for engagement and work with tight schedules</p>
            <AiOutlineSchedule className='icons'/>
            <p>I’m eager to learn and continuously improving my skills as a developer, therefore, I believe that my skills would be extremely valuable to help
companies meet their goals</p>
            <FaLaptopCode className='icons final__icon'/>
        </section>
    )
}

export default Resume;