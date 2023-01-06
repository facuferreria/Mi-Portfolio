import React from 'react'
import styles from './Presentation.module.scss'
import Typewriter from 'typewriter-effect';

function Presentation() {
    return (
        <div className="container" id="home">
            <div className={styles.subcontainer}>
                <div>
                    <p className={styles.text} >Hola! Me llamo <span className={styles.blue_text}>Facundo.</span></p>
                    <p className={styles.text} >Soy un frontend developer y mi objetivo principal es que juntos:</p>
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                            .changeDelay(40)
                            .changeDeleteSpeed(30)
                            .typeString('<strong>Desarrollemos esa pagina ideal que imaginas</strong>')
                            .pauseFor(1500)
                            .deleteChars(43)
                            .typeString('<strong>Impulsemos ese negocio que tenes</strong>')
                            .pauseFor(1500)
                            .deleteChars(32)
                            .typeString('<strong>Cumplamos ese sueño que queres</strong>')
                            .pauseFor(1500)
                            .deleteChars(30)
                            .start();
                        }}
                    />
                    <button className={styles.button} >Ve mis proyectos</button>
                </div>
            </div>
        </div>
    )
}

export default Presentation