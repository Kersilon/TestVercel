import React from 'react'
import styles from "./personalArea.module.css"

const personalArea= () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h1>Area Personale</h1>
        </div>
        <div className={styles.containerFeature}>
          <div class={styles.feature}>
            <a target="_blank" href="/">
              <img src="/Queue&GoLogoS.png" alt="Cinque Terre"/>
            </a>
            <div class="desc">feature</div>
          </div>

          <div class={styles.feature}>
            <a target="_blank" href="/">
              <img src="/Queue&GoLogoS.png" alt="Cinque Terre"/>
            </a>
            <div class="desc">feature</div>
          </div>

          <div class={styles.feature}>
            <a target="_blank" href="/">
              <img src="/Queue&GoLogoS.png" alt="Cinque Terre"/>
            </a>
            <div class="desc">feature</div>
          </div>

          <div class={styles.feature}>
            <a target="_blank" href="/">
              <img src="/Queue&GoLogoS.png" alt="Cinque Terre"/>
            </a>
            <div class="desc">feature</div>
          </div>
        </div>
    </div>
  )
}

export default personalArea