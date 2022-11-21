import React from 'react';
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Social = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/gabriella-andrade-a2948812b/' target="__blank"><BsLinkedin/></a>
            <a href='https://github.com/puentedg' target="__blank"><FaGithub /></a>
            

        </div>
    )
}

export default Social