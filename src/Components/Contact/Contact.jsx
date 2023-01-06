import React from 'react'
import styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className= "container" id="contact">
        <h2 className= "header">CONTACTO</h2>
        <div className= "header_bar"></div>
        <div className={styles.subcontainer}>
            <h4 className={styles.text}>
                Estas buscando gente capacitada en el rubro, tenes una idea en la que quieras trabajar o simplemente tenes alguna duda,
                hablemos y coordinemos una reunion.          
            </h4>
            <a href="mailto:ferreriafacundo@gmail.com" className={styles.button}>Trabajemos juntos</a>
        </div>
        <div className={styles.separation_line}></div>
        <div className={styles.subcontainer}>
            <div className={styles.socials}>
                <a target="_blank" href="https://www.linkedin.com/in/facundoferreria/" className={styles.icons}><FontAwesomeIcon icon="fa-brands fa-linkedin" size='xl' /></a>
                <a target="_blank" href="https://github.com/facuferreria" className={styles.icons}><FontAwesomeIcon icon="fa-brands fa-github" size='xl' /></a>
                <a target="_blank" href="https://www.instagram.com/facuferreria/" className={styles.icons}><FontAwesomeIcon icon="fa-brands fa-instagram" size='xl' /></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100006821357397" className={styles.icons}><FontAwesomeIcon icon="fa-brands fa-facebook" size='xl' /></a>
                <a target="_blank" href="https://wa.me/1135651500" className={styles.icons}><FontAwesomeIcon icon="fa-brands fa-whatsapp" size='xl' /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact