import React from 'react'
import ProyectCard from '../ProyectCard/ProyectCard'
import styles from './Proyects.module.scss'
import { proyectsData } from '../../proyects';
import { useScrollAnimation } from '../Hooks/useScrollAnimation';

function Proyects() {
  const { isAnimating } = useScrollAnimation();

  return (
    <div className= "container" id="proyects">
      <h2 className={isAnimating ? "header toRight" : "header"}>PROYECTOS</h2>
      <div className={isAnimating ? "header_bar toRightBar" : "header_bar"}></div>
      <p className= {isAnimating ? `${styles.intro_text} ${styles.animation}` : styles.intro_text}>
        Desde simples proyectos con HTML, CSS y Javascript hasta portfolios y clones de famosas aplicaciones con ReactJS, 
        les invito a ver algunos de los proyectos personales mas destacados en los que 
        he estado trabajando desde que comenze este camino como Frontend developer:</p>
      <div className={styles.proyect_container}>
        { proyectsData.map((item, index) => <ProyectCard proyectData = {item} key={index} />) }
      </div>
    </div>
  )
}

export default Proyects