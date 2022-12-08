import React from 'react';
import './skills.css';
import {FaHtml5} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiBulma} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaNpm} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

// import Progressbar from './Progress_bar';


const Skills = () => {
    return (
        <section id='skills'>
            <h2>Skills</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <h4><FaHtml5 className='icons_skills'/> HTML</h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='98' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><IoLogoCss3 className='icons_skills'/> CSS </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='98' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><IoLogoJavascript className='icons_skills'/> JavaScript </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='95' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><FaReact className='icons_skills'/> React </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='97' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><FaBootstrap className='icons_skills'/> Bootstrap </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='95' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><SiBulma className='icons_skills'/> Bulma </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='96' height={15} /> */}
                        </article>
                    </div>
            </div>
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <h4><FaNodeJs className='icons_skills'/> NodeJs </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='96' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><GrMysql className='icons_skills'/> MySQL </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='95' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><SiMongodb className='icons_skills'/> MongoDb </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='95' height={15} /> */}
                        </article>
                        <article className='experience__details'>
                            <h4><SiExpress className='icons_skills'/> Express </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='93' height={15} /> */}
                        </article>
                        {/* <article className='experience__details'>
                            <h4><FaNpm className='icons_skills'/> npm </h4>
                            {/* <Progressbar bgcolor="#f6bd60" progress='98' height={15} />
                        </article>  */}
                    </div>
            </div>
        </div>
        </section>
    )
}

export default Skills;