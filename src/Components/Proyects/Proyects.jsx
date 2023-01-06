import React from 'react'
import ProyectCard from '../ProyectCard/ProyectCard'
import styles from './Proyects.module.scss'
import { proyectsData } from '../../proyects';

function Proyects() {
  return (
    <div className= "container" id="proyects">
      <h2 className= "header">PROYECTOS</h2>
      <div className= "header_bar"></div>
      <p className= {styles.intro_text}>
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