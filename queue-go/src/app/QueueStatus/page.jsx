'use client';

import React from 'react'
import styles from "./QueueStatus.module.css"
import Link from 'next/link'
import { useState } from 'react';

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

  const [userData, setUserData] = useState({
    id: 0,
    name: "placeholder",
    surname: "placeholder",
    visibility: "hidden"
  });

  return (
    <div className={styles.container}>
      <div className={styles.lineInfo}>
        <div className={styles.infos}>
          <h1 className={styles.info}>x persone in fila</h1>
          <h1 className={styles.info}>tempo di attesa medio</h1>
        </div>
        <button className="button">Generate QR code</button>
        <div className={"popupContainer" + " " + styles.qrPopupContainer} id="qrCodeContainer" onClick="placeholder">
          <img class={styles.qrPopupImage} src="https://i.redd.it/r72kvnykeui41.png" alt="Qr code" />
          <h2 class={styles.popupClose}>X</h2>
        </div>

      </div>
      <div className={styles.items}>
        {
          users.map(
            (user) => (
              <Link href={""} className={styles.item}>
              <div onClick={() => {setUserData({id: user.id, name: user.name, surname: user.surname, visibility:"visible"});}} className={styles.title}>{user.id} {user.name} {user.surname}</div>
              </Link>
            )
          )
        }
      </div>
      <div style={{visibility:`${userData.visibility}`}} className={"popupContainer" + " " + styles.userPopupContainer} id="userPopupContainer" onClick="placeholder">
          <h1>{userData.id}</h1>
          <h1>{userData.name}</h1>
          <h1>{userData.surname}</h1>
          <h2 onClick={() => {setUserData({visibility:"hidden"});}} class={styles.popupClose}>X</h2>
      </div>
    </div>
  )
}

export default queue