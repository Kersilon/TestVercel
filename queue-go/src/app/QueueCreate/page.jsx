import React from 'react'
import styles from "./QueueCreate.module.css"

export const metadata = {
  title: 'Queue Creation'
}


const createQueue = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Create queue page</h1>
        <div className={styles.buttons}>
            <a className="button" href="/QueueStatus">create simple Queue</a>
            <a className="button" href="/QueueStatus">create personalized Queue</a>
            <a className="button" href="/QueueStatus">...</a>
        </div>
    </div>
  )
}

export default createQueue