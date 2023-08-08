"use client"

import React from 'react'
import styles from "./paginaMobile.module.css"
import Link from 'next/link'
import { useState } from 'react'

const PaginaMobile= () => {

  const [isClosed, setIsClosed] = useState(false)

  function closePopup() {
    setIsClosed(false);
  }

  function openPopup() {
    setIsClosed(true);
  }

  var qrCodePopup = 
  <div className={"popupContainer" + " " + styles.cameraPopupContainer} id="qrCodeContainer">
    <div className={styles.placeholderCamera}>Camera</div>
    <h2 onClick={closePopup} class={"popupClose"}>X</h2>
  </div>;

  return (
    <div>
        <div class={styles.centeredTitle}>
          <h2>Unisciti ad una fila</h2>
        </div>

        <div class={styles.centeredContainer}>
        <div class={styles.centeredDivs}>
          
          <div class={styles.centeredFunctions}>
          <Link href="/ricercaServizi"><img class={styles.imag} src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/245532/14-512.png"/></Link>  
            <div >Cerca una fila
            </div>
          </div>
        
       
          <div class={styles.centeredFunctions}>
          <Link href=""> <img onClick={openPopup} class={styles.imag} src="https://www.bew-web-agency.fr/wp-content/uploads/2022/03/qr-code-g494f94760_1280.png"/> </Link>
            <div >Codice QR</div>
            {isClosed && qrCodePopup}
          </div>
          </div>
          </div>

    </div>
  )
}

export default PaginaMobile