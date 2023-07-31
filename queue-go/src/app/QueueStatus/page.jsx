'use client';

import React from 'react'
import styles from "./QueueStatus.module.css"
import Link from 'next/link'

const path = "/QueueStatus/"

const users = [
  {
    id:1,
    name:"Mario",
    surname:"Rossi",
  },
  {
    id:2,
    name:"Dante",
    surname:"Sparda",
  },
  {
    id:3,
    name:"Virgilio",
    surname:"Sparda",
  },
  {
    id:4,
    name:"Luigi",
    surname:"Verdi",
  },
  {
    id:5,
    name:"Leonardo",
    surname:"Rossi",
  },
  {
    id:6,
    name:"Francesco",
    surname:"Marchetti",
  },
  {
    id:7,
    name:"Alessando",
    surname:"Ferrari",
  },
  {
    id:8,
    name:"Lorenza",
    surname:"Martini",
  },
]

const queue = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineInfo}>
        <div className={styles.infos}>
          <h1 className={styles.info}>x persone in fila</h1>
          <h1 className={styles.info}>tempo di attesa medio</h1>
        </div>
        <button className="button">Generate QR code</button>
        <div class={styles.popupContainer} id="qrCodeContainer" onClick="placeholder">
          <img class={styles.popupImage} src="https://i.redd.it/r72kvnykeui41.png" alt="Qr code" />
          <h2 class={styles.popupClose}>X</h2>
        </div>

      </div>
      <div className={styles.items}>
        {
          users.map(
            (user) => (
              <Link href={path+user.name+" "+user.surname} className={styles.item}>
              <span className={styles.title}>{user.id} {user.name} {user.surname}</span>
              </Link>
            )
          )
        }
      </div>
    </div>
  )
}

export default queue