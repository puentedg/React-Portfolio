import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiFillFileText} from 'react-icons/ai'
import { useState } from 'react';

const Nav = ({currentPage, handlePageChange}) => {
   console.log(currentPage, handlePageChange);
    return (
    <nav>
        <a href='#' onClick={()=>handlePageChange('#')} className={currentPage === '#' ? 'active' : ''}><AiOutlineHome/><h5>Home</h5></a>
        <a href='#about' onClick={()=>handlePageChange('about')} className={currentPage === '#about' ? 'active' : ''}><AiOutlineUser/><h5>About</h5></a>
        <a href='#skills' onClick={()=>handlePageChange('skills')} className={currentPage === '#skills' ? 'active' : ''}><BiBook/><h5>Skills</h5></a>
        <a href='#projects' onClick={()=>handlePageChange('projects')} className={currentPage === '#projects' ? 'active' : ''}><RiServiceLine/><h5>Projects</h5></a>
        <a href='#contact' onClick={()=>handlePageChange('contact')} className={currentPage === '#contact' ? 'active' : ''}><BiMessageSquareDetail/><h5>Contact</h5></a>
        <a href='#resume' onClick={()=>handlePageChange('resume')} className={currentPage === '#resume' ? 'active' : ''}><AiFillFileText/><h5>Resume</h5></a>
    </nav>
    )
}

export default Nav