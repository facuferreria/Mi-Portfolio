import React from 'react'
import styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollAnimation } from '../Hooks/useScrollAnimation';

function Contact() {
    const { isAnimating } = useScrollAnimation();

    return (
        <div className= "container" id="contact">
            <h2 className= {isAnimating ? "header toLeft" : "header"}>CONTACTO</h2>
            <div className= {isAnimating ? "header_bar toLeftBar" : "header_bar"}></div>
            <div className={styles.subcontainer}>
                <h4 className={isAnimating ? `${styles.text} ${styles.animation_text}` : styles.text}>
                    Estas buscando gente capacitada en el rubro, tenes una idea en la que quieras trabajar o simplemente tenes alguna duda,
                    hablemos y coordinemos una reunion.          
                </h4>
                <a href="mailto:ferreriafacundo@gmail.com" className={isAnimating ? `${styles.button} ${styles.animation_button}` : styles.button}>Trabajemos juntos</a>
            </div>
            <div className={isAnimating ? `${styles.separation_line} ${styles.animation_line}` : styles.separation_line}></div>
            <div className={styles.subcontainer}>
                <div className={styles.socials}>
                    <a target="_blank" href="https://www.linkedin.com/in/facundoferreria/" className={isAnimating ? `${styles.icons} ${styles.animation_icon}` : styles.icons}>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" size='xl' />
                    </a>
                    <a target="_blank" href="https://github.com/facuferreria" className={isAnimating ? `${styles.icons} ${styles.animation_icon}` : styles.icons}>
                        <FontAwesomeIcon icon="fa-brands fa-github" size='xl' />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/facuferreria/" className={isAnimating ? `${styles.icons} ${styles.animation_icon}` : styles.icons}>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" size='xl' />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100006821357397" className={isAnimating ? `${styles.icons} ${styles.animation_icon}` : styles.icons}>
                        <FontAwesomeIcon icon="fa-brands fa-facebook" size='xl' />
                    </a>
                    <a target="_blank" href="https://wa.me/1135651500" className={isAnimating ? `${styles.icons} ${styles.animation_icon}` : styles.icons}>
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" size='xl' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact