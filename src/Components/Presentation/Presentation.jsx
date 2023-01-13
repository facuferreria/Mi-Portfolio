import React from 'react'
import styles from './Presentation.module.scss'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Presentation() {
    return (
        <div className="container" id="home">
            <div className={styles.subcontainer}>
                <div className={styles.text_container}>
                    <p className={styles.text} >
                        Hola! Me llamo <span className={styles.blue_text}>Facundo.</span><br/>
                        Soy un frontend developer y mi objetivo principal es que juntos:
                    </p>
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(1500)
                            .changeDelay(40)
                            .changeDeleteSpeed(30)
                            .typeString('<span><strong>Desarrollemos esa pagina que deseas</strong></span>')
                            .pauseFor(1500)
                            .deleteChars(35)
                            .typeString('<span><strong>Impulsemos ese negocio que tenes</strong></span>')
                            .pauseFor(1500)
                            .deleteChars(32)
                            .typeString('<span><strong>Cumplamos ese sueño que queres</strong></span>')
                            .pauseFor(1500)
                            .deleteChars(30)
                            .start();
                        }}
                    />
                </div>
                <a href="/#proyects" className={styles.button}> 
                    <span>Ve mis proyectos</span>                        
                    <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-arrow-right" />                                           
                </a>
            </div>
        </div>
    )
}

export default Presentation