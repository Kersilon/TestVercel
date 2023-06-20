import React from 'react'
import styles from "./queue.module.css"
import Link from 'next/link'

const queue = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Users in line</h1>
      <div className={styles.items}>
        <Link href="/queue" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>

        <Link href="/queue" className={styles.item}>
          <span className={styles.title}>idUtente</span>
        </Link>
      </div>
    </div>
  )
}

export default queue