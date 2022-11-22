import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiFillFileText} from 'react-icons/ai'
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    return (
    <nav>
        <a href='#' onClick={()=>setActiveNav('#')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/>{isHovering && <h5>Home</h5>}</a>
        <a href='#about' onClick={()=>setActiveNav('About')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/>{isHovering && <h5>About</h5>}</a>
        <a href='#skills' onClick={()=>setActiveNav('Skills')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={activeNav === '#skills' ? 'active' : ''}><BiBook/>{isHovering && <h5>Skills</h5>}</a>
        <a href='#projects' onClick={()=>setActiveNav('#projects')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine/>{isHovering && <h5>Projects</h5>}</a>
        <a href='#contact' onClick={()=>setActiveNav('#contact')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/>{isHovering && <h5>Contact</h5>}</a>
        <a href='#resume' onClick={()=>setActiveNav('#resume')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={activeNav === '#resume' ? 'active' : ''}><AiFillFileText/>{isHovering && <h5>Resume</h5>}</a>
    </nav>
    )
}

export default Nav