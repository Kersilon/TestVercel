import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Copyright</div>
      <div className='socialImages'>
        <Image src="" alt="Immagini social" width={15} height={15} className={styles.icon}></Image>
        <Image src="" alt="Immagini social" width={15} height={15} className={styles.icon}></Image>
        <Image src="" alt="Immagini social" width={15} height={15} className={styles.icon}></Image>
        <Image src="" alt="Immagini social" width={15} height={15} className={styles.icon}></Image>
      </div>
    </div>  
  )
}

export default Footer