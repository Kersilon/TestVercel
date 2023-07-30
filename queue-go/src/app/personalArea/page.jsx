import React from 'react'
import styles from "./personalArea.module.css"
import Link from 'next/link'

const personalArea= () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h1>Area Personale</h1>
        </div>
        <div className={styles.containerFeature}>
        <Link href="/">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/security._CB657833960_.png"/>
            <div class={styles.featureText}>Cambio Password</div>
          </div>
        </Link>  

        <Link href="/">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657833960_.png"/>
            <div class={styles.featureText} >Cambio Informazioni Personali</div>
          </div>
        </Link>  
        </div>
    </div>
  )
}

export default personalArea