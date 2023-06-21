import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copytext}>
        ©2023 Queue&Go <br />
        An idea by Simone Scermino, Ersilio Petretta, Roberto Miron Andrei
      </div>
      <div className='socialImages'>
        <Image src="/logoFacebook.png" alt="Immagini social" width={30} height={30} className={styles.icon}></Image>
        <Image src="/logoInstagram.png" alt="Immagini social" width={30} height={30} className={styles.icon}></Image>
        <Image src="/logoTikTok.png" alt="Immagini social" width={30} height={30} className={styles.icon}></Image>
        <Image src="/logoYoutube.png" alt="Immagini social" width={30} height={30} className={styles.icon}></Image>
      </div>
    </div>  
  )
}

export default Footer