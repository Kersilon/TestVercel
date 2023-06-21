import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="Immagine sfondo about"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Queue&Go </h1>
          <h2 className={styles.imgDesc}> Sito per la gestione facilitata delle file </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Chi siamo? </h1>
          <p className={styles.desc}>
            Testo di presentazione del gruppo Testo di presentazione del gruppo Testo di presentazione del gruppo Testo di presentazione del gruppo Testo di presentazione del gruppo
          </p>
        </div> 
        <div className={styles.item}>
          <h1 className={styles.title}> Qual è lo scopo del sito? </h1>
          <p className={styles.desc}>
            Testo di presentazione del sito/progetto Testo di presentazione del sito/progetto Testo di presentazione del sito/progetto Testo di presentazione del sito/progetto Testo di presentazione del sito/progetto
          </p>
        </div> 
      </div>
    </div>
  )
}

export default About