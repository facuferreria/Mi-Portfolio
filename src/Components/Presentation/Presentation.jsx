import React from 'react'
import styles from './Presentation.module.scss'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Presentation() {
    return (
        <div className="container" id="home">
            <div className={styles.subcontainer}>
                <p className={styles.text} >Hola! Me llamo <span className={styles.blue_text}>Facundo.</span></p>
                <p className={styles.text} >Soy un frontend developer y mi objetivo principal es que juntos:</p>
                <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                        typewriter
                        .pauseFor(1500)
                        .changeDelay(40)
                        .changeDeleteSpeed(30)
                        .typeString('<strong>Desarrollemos esa pagina ideal que deseas</strong>')
                        .pauseFor(1500)
                        .deleteChars(41)
                        .typeString('<strong>Impulsemos ese negocio que tenes</strong>')
                        .pauseFor(1500)
                        .deleteChars(32)
                        .typeString('<strong>Cumplamos ese sueño que queres</strong>')
                        .pauseFor(1500)
                        .deleteChars(30)
                        .start();
                    }}
                />
                <a href="/#proyects" className={styles.button}>     
                    Ve mis proyectos
                    <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-arrow-right" />                       
                </a>
            </div>
        </div>
    )
}

export default Presentation