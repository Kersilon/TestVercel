import React from 'react'
import styles from "./paginaMobile.module.css"
import Link from 'next/link'

const paginaMobile= () => {


  return (
    <div>

        <div class={styles.centeredTitle}>
          <h2>Entra nella fila nei seguenti modi</h2>
        </div>

        <div class={styles.centeredContainer}>
        <div class={styles.centeredDivs}>
          
          <div class={styles.centeredFunctions}>
          <Link href="/ricercaServizi"><img class={styles.imag} src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/245532/14-512.png"/></Link>  
            <div >Ricerca servizi
            </div>
          </div>
        
       
          <div class={styles.centeredFunctions}>
          <Link href="/"> <img class={styles.imag} src="https://www.bew-web-agency.fr/wp-content/uploads/2022/03/qr-code-g494f94760_1280.png"/> </Link>
            <div >Scansiona QR</div>
          </div>
          </div>
          </div>

    </div>
  )
}

export default paginaMobile