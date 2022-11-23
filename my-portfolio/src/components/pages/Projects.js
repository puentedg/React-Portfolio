import React from 'react';
import './projects.css'
import CodingQuiz from '../../images/CodingQuiz.png'
import searchdisplayer from '../../images/searchdisplayer.png'
import techblog from '../../images/techblog.png'
import page_team from '../../images/page_team.png'
import techEvent from '../../images/techEvent.png'
import weather from '../../images/weather.png'


const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={CodingQuiz} alt="coding quiz"/>
                    </div>
                    <h3>Coding Quiz</h3>
                    <div className='portfolio__cta'>
                        <a href='https://github.com/puentedg/coding-quiz' className='btn' target='_blank'>Github</a>
                        <a href='https://puentedg.github.io/coding-quiz/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={weather} alt="weather dashboard"/>
                    </div>
                    <h3>Weather Dashboard</h3>
                    <div className='portfolio__cta'>
                        <a href='https://github.com/puentedg/Weather-dashboard' className='btn' target='_blank'>Github</a>
                        <a href='https://puentedg.github.io/Weather-dashboard/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={page_team} alt="team builder"/>
                    </div>
                    <h3>Team Generator</h3>
                    <div className='portfolio__cta'>
                        <a href='https://github.com/puentedg/Team-Generator/' className='btn' target='_blank'>Github</a>
                        <a href='https://drive.google.com/file/d/1Xnx0USb2wwfZVsdaZT6dAdLWZpSuR_e_/view' className='btn btn-primary' target='_blank'>Video</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={searchdisplayer} alt="search displayer"/>
                    </div>
                    <h3>Search Displayer</h3>
                    <div className='portfolio__cta'>
                        <a href='https://github.com/Muaizkh/Search-Displayer' className='btn' target='_blank'>Github</a>
                        <a href='https://muaizkh.github.io/Search-Displayer/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={techblog} alt="tech blog"/>
                    </div>
                    <h3>Tech Blog</h3>
                    <div className='portfolio__cta'>
                        <a href='https://github.com/puentedg/tech-blog' className='btn' target='_blank'>Github</a>
                        <a href='https://murmuring-peak-33881.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={techEvent} alt="tech event"/>
                    </div>
                    <h3>Tech Event</h3>
                    <div className='portfolio__cta'>
                        <a href='https://github.com/hmhtom/tech-event-planner' className='btn' target='_blank'>Github</a>
                        <a href='https://tech-event-planner.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects;