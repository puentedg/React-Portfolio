import React from 'react';
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Social = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/gabriella-andrade-a2948812b/' target="__blank"><BsLinkedin size={40}/></a>
            <a href='https://github.com/puentedg' target="__blank"><FaGithub size={40}/></a>
            

        </div>
    )
}

export default Social