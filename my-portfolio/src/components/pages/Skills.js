import React from 'react';
import './skills.css';
import Progressbar from './Progress_bar';


const Skills = () => {
    return (
        <section id='skills'>
            <h2>Skills</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <h4>HTML</h4>
                            <Progressbar bgcolor="#f6bd60" progress='98' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>CSS</h4>
                            <Progressbar bgcolor="#f6bd60" progress='98' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>JavaScript</h4>
                            <Progressbar bgcolor="#f6bd60" progress='95' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>React</h4>
                            <Progressbar bgcolor="#f6bd60" progress='97' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>Bootstrap</h4>
                            <Progressbar bgcolor="#f6bd60" progress='95' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>Bulma</h4>
                            <Progressbar bgcolor="#f6bd60" progress='96' height={15} />
                        </article>
                    </div>
            </div>
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <h4>NodeJs</h4>
                            <Progressbar bgcolor="#f6bd60" progress='96' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>MySQL</h4>
                            <Progressbar bgcolor="#f6bd60" progress='95' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>MongoDb</h4>
                            <Progressbar bgcolor="#f6bd60" progress='95' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>NoSQL</h4>
                            <Progressbar bgcolor="#f6bd60" progress='93' height={15} />
                        </article>
                        <article className='experience__details'>
                            <h4>npm</h4>
                            <Progressbar bgcolor="#f6bd60" progress='98' height={15} />
                        </article>
                    </div>
            </div>
        </div>
        </section>
    )
}

export default Skills;