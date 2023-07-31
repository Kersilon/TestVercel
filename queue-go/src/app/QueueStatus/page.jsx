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

        
        <div class={styles.popup} onclick="myFunction()">
	        Click me to toggle the popup!
          <span class={styles.popuptext} id="myPopup">A Simple Popup!</span>
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