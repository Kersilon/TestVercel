import React from 'react'
import styles from "./queue.module.css"

const layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.selectTitle}>Users in line</h1>
        {children}
    </div>
  )
}

export default layout