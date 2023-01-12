import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
        <div>
            Diseñado y construido por  
            <a href="https://github.com/facuferreria" target="_blank" className={styles.link}> @facuferreria</a>
        </div>
    </div>
  )
}

export default Footer