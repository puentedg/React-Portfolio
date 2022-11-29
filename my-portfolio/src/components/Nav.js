import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiFillFileText} from 'react-icons/ai'

const Nav = ({currentPage, handlePageChange}) => {
   console.log(currentPage, handlePageChange);
    return (
    <nav>
        <a href='#' onClick={()=>handlePageChange('#')} className={currentPage === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>handlePageChange('about')} className={currentPage === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href='#skills' onClick={()=>handlePageChange('skills')} className={currentPage === '#skills' ? 'active' : ''}><BiBook/></a>
        <a href='#projects' onClick={()=>handlePageChange('projects')} className={currentPage === '#projects' ? 'active' : ''}><RiServiceLine/></a>
        <a href='#contact' onClick={()=>handlePageChange('contact')} className={currentPage === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
        <a href='#resume' onClick={()=>handlePageChange('resume')} className={currentPage === '#resume' ? 'active' : ''}><AiFillFileText/></a>
    </nav>
    )
}

export default Nav