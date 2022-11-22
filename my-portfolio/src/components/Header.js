import React from 'react';
import './header.css';
import ME3 from '../images/ME3.png';
import Social from '../components/Social';
import Typical from 'react-typical';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <Typical
                steps = {[
                    "Hello I'm",
                    1000,
                ]}
                loop={Infinity}
                wrapper="h4"
                />
                <h1>Gabriella Puente</h1>
                <h3 className='text-light'> 
                <b>Full Stack Developer</b>
                </h3>
                <Social />
                <div className='me'>
                    <img src={ME3} alt="me"/>
                </div>
                {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
            </div>
        </header>
    )
}

export default Header