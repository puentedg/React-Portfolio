import React from 'react'
import './about.css'
import CV from '../../assets/Resume.pdf'
const Resume = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
        </div>
    )
}

export default Resume;