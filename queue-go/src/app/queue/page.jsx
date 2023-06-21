import React from 'react'
import styles from "./queue.module.css"
import Link from 'next/link'

const queue = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
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