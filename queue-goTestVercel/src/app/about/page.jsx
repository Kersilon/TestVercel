import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'About us'
}

const About = () => {
  return (

    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://img.freepik.com/free-vector/men-women-standing-long-queue-reception-3d-isometric-illustration_1284-55195.jpg?w=2000"
          fill={true}
          alt="Immagine sfondo about"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Queue&Go </h1>
          <h2 className={styles.imgDesc}> Web-app per la gestione facilitata delle file </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Chi siamo? </h1>
          <p className={styles.desc}>
            Siamo un trio dinamico di studenti del corso di Informatica dell&apos;Università di Salerno. Abbiamo unificato le nostre passioni e competenze per sviluppare questa web-app, nata come progetto per il nostro corso di Interazione Uomo-Macchina. Ogni membro del nostro team ha assunto un ruolo chiave per garantire il successo del nostro progetto: <br/>
            <br/> Ersilio Petretta - Manager del gruppo e del design <br/>
            Simone Scermino - Manager della documentazione <br/>
            Roberto Andrei Miron - Manager della valutazione.
            
          </p>
        </div> 
        <div className={styles.item}>
          <h1 className={styles.title}> Qual è lo scopo della web-app? </h1>
          <p className={styles.desc}>
           Queue&Go è progettata per semplificare e migliorare la gestione delle code nelle varie attività commerciali e istituzioni, tra cui ristoranti, ospedali e molte altre.  Il nostro sito consente agli utenti di prenotare, monitorare e gestire il loro posto in coda in maniera efficace e intuitiva, offrendo un controllo senza precedenti sull&apos;esperienza d&apos;attesa. <br/>
           Per i gestori delle attività, Queue&Go offre un metodo innovativo e efficiente per organizzare e gestire le code, migliorando il flusso di clienti e minimizzando l&apos;insoddisfazione che può derivare da lunghe attese. <br/>
           <br/>Ci impegniamo a trasformare l&apos;attesa, spesso vista come un fastidio, in un processo fluido e controllato, risparmiando tempo prezioso sia ai clienti che ai fornitori di servizi.
          </p>
        </div> 
      </div>
    </div>
  )
}

export default About