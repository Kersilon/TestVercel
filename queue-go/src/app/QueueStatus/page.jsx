import React from 'react'
import styles from "./QueueStatus.module.css"
import Link from 'next/link'

const queue = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineInfo}>
        <div className={styles.infos}>
          <h1 className={styles.info}>x persone in fila</h1>
          <h1 className={styles.info}>tempo di attesa medio</h1>
        </div>
        <button className="button">Generate QR code</button>
      </div>
      <div className={styles.items}>
        <Link href="/QueueStatus/utente1" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente2" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente3" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente1" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente2" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente3" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente1" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente2" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue/utente3" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>
      </div>
    </div>
  )
}

export default queue