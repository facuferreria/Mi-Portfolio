import React, { useState } from 'react'
import styles from './ProyectCard.module.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slider from '../Slider/Slider';
import { useScrollAnimation } from '../Hooks/useScrollAnimation';

function ProyectCard({proyectData}) {

    const [show, setShow] = useState(false);
    const { isAnimating } = useScrollAnimation();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={isAnimating ? `${styles.card_container} ${styles.animation_card}` : styles.card_container} >
            <div className={styles.card_img}></div>
            <div className={styles.card_text}>
                <h3 className={styles.card_title}>{proyectData.title}</h3>
                <p className={styles.card_title}>
                    El proyecto final del curso de ReactJS por parte de Coderhouse, 
                    una increible e-commerce de zapatillas.
                </p>
            </div>
            <div className={styles.card_button}>
                <button onClick={handleShow} className={styles.button}>
                    Ver mas...
                </button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{proyectData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Slider images= {proyectData.images} />
                        <h4 className={styles.modal_subtitle}>Descripcion:</h4>
                        <p>{proyectData.info}</p>
                        <h4 className={styles.modal_subtitle}>Tecnologias que utilice:</h4>
                        {proyectData.technologies.map((item, index) => <p key={index}>+ {item}</p>)}
                        <div>
                            <h4 className={styles.modal_subtitle}> Ver proyecto</h4>
                            <div className={styles.container_links}>
                                <a href={proyectData.website} target="_blank" className={styles.modalLink}>Ver sitio web</a>
                                <a href={proyectData.gitLink} target="_blank" className={styles.modalLink}>Ver repositorio</a>
                            </div>
                        </div>
                        
                    </Modal.Body>
                </Modal>
            </div>
        </div>
  )
}

export default ProyectCard