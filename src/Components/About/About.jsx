import React from 'react'
import styles from './About.module.scss'
import rectangular_photo from '../../assets/yo_rectangular.jpeg'
import { useScrollAnimation } from '../Hooks/useScrollAnimation';

function About() {
    const { isAnimating } = useScrollAnimation();

    return (
        <div className= "container" id="about">
            <h2 className= {isAnimating ? "header toLeft" : "header"}>SOBRE MI</h2>
            <div className= {isAnimating ? "header_bar toLeftBar" : "header_bar"}></div>
            <div className={styles.subcontainer} >
                <div className={isAnimating ? `${styles.text_container} ${styles.animation_text}` : styles.text_container} >
                    <p className={styles.text}>
                        Hola me llamo Facu, soy una persona <span className={styles.strong_words}>apasionada</span> por lo que hace, 
                        naturalmente <span className={styles.strong_words}>curioso</span>, 
                        que se destaca por <span className={styles.strong_words}>resolver problemas</span> y que constantemente busca por mejorar sus habilidades como 
                        <span className={styles.strong_words}> Frontend developer.</span>
                    </p>
                    <p>
                        Recientemente me egrese de la escuela tecnica N°28 como tecnico electronico pero mi pasion me derivo mas por 
                        el lado de la programacion. Aspiro a estudiar ingenieria informatica en la UBA y a su vez  
                        <span className={styles.strong_words}> seguir capacitandome 
                        en el rubro para poder convertirme en un Desarrollador Fullstack.</span>
                    </p>
                    <div>
                        <p>Estas son las tecnologias con las que trabajo:</p>
                        <ul className= {styles.list}>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>HTML</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>CSS</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>Bootstrap</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>Sass</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>Javascript</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>ReactJS</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>NodeJS</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>Lenguaje C</li>
                            <li className= {isAnimating ? `${styles.list_item} ${styles.animation_item}` : styles.list_item}>Firebase</li>
                        </ul>
                    </div>
                    <p>
                        Si estas buscando tener presencia en internet con tu propia web o eres parte de una empresa que esta en busca
                        de desarrollladores capacitados, <a href="#" className={styles.link}>hablame y trabajemos juntos.</a>
                    </p>
                </div>
                <img src={rectangular_photo} alt="me" className={isAnimating ? `${styles.img} ${styles.animation_img}` : styles.img} />
            </div>
        </div>
    )
}

export default About