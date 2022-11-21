import React from 'react';
import './header.css'
import ME from '../images/ME.png'
import Social from '../components/Social'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Gabriella Puente</h1>
                <h5 className='text-light'> 
                Full Stack Developer
                </h5>
                <Social />
                <div className='me'>
                    <img src={ME} alt=""></img>
                </div>
            </div>
        </header>
    )
}

export default Header