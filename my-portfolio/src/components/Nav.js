import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiFillFileText} from 'react-icons/ai'

const Nav = ({currentPage, handlePageChange}) => {
   console.log(currentPage, handlePageChange);
   const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
    <nav>
        <a href='#' onClick={()=>handlePageChange('#')} className={currentPage === '#' ? 'active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><AiOutlineHome/>{isHovering && (
          <h4 className='nav__text'>Home</h4>)}</a>
        <a href='#about' onClick={()=>handlePageChange('about')} className={currentPage === '#about' ? 'active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><AiOutlineUser/> {isHovering && (
          <h4 className='nav__text'>About</h4>)}</a>
        <a href='#skills' onClick={()=>handlePageChange('skills')} className={currentPage === '#skills' ? 'active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><BiBook/>{isHovering && (
          <h4 className='nav__text'>Skills</h4>)}</a>
        <a href='#projects' onClick={()=>handlePageChange('projects')} className={currentPage === '#projects' ? 'active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><RiServiceLine/>{isHovering && (
          <h4 className='nav__text'>Projects</h4>)}</a>
        <a href='#contact' onClick={()=>handlePageChange('contact')} className={currentPage === '#contact' ? 'active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><BiMessageSquareDetail/>{isHovering && (
          <h4 className='nav__text'>Contact</h4>)}</a>
        <a href='#resume' onClick={()=>handlePageChange('resume')} className={currentPage === '#resume' ? 'active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><AiFillFileText/>{isHovering && (
          <h4 className='nav__text'>Resume</h4>)}</a>
    </nav>
    )
}

export default Nav