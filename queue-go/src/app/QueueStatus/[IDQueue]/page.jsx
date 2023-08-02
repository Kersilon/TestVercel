'use client';

import React from 'react'
import styles from "./QueueStatus.module.css"
import Link from 'next/link'
import { useState } from 'react';
import { mockData } from '@/components/mockData';
import { mockDataCode } from '@/components/mockDataCode';

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

const queue = ({params}) => {
  var codaScelta = mockDataCode.find(coda => coda.id == params.IDQueue);


  const [userData, setUserData] = useState({
    id: 0,
    name: "placeholder",
    surname: "placeholder",
    visibility: "hidden"
  });

  const [qrCodeIsVisible, setQrCodeIsVisible] = useState({
    visibility: "hidden"
  })

  var account = JSON.parse(localStorage.getItem('account'));
  var qrCodeButton;
  var qrCodePopup;

  if(account != null && account.tipo == 'azienda') {
    var qrCodeButton = <button onClick={() => {setQrCodeIsVisible({visibility:"visible"});}} className="button">Generate QR code</button>;
    var qrCodePopup = 
    <div style={{visibility:`${qrCodeIsVisible.visibility}`}} className={"popupContainer" + " " + styles.qrPopupContainer} id="qrCodeContainer">
      <img class={styles.qrPopupImage} src="https://i.redd.it/r72kvnykeui41.png" alt="Qr code" />
      <h2 onClick={() => {setQrCodeIsVisible({visibility:"hidden"});}} class={"popupClose"}>X</h2>
    </div>;
  }else{

  }

  return (
    <div className={styles.container}>
      <div className={styles.lineInfo}>
        <div className={styles.infos}>
          <h1 className={styles.info}>Nome della coda: {codaScelta.nome}</h1>
          <h1 className={styles.info}>x persone in fila</h1>
          <h1 className={styles.info}>tempo di attesa medio</h1>
        </div>
        {qrCodeButton}
        {qrCodePopup}
      </div>
      <div className={styles.items}>
        {
          codaScelta.listaPersone.map(
            (idUser) => {
              var user = mockData.find(user => user.id == idUser);
              console.log(user);
              return (
                <Link href={""} className={styles.item}>
                <div onClick={() => {setUserData({id: user.id, name: user.username, visibility:"visible"});}} className={styles.title}>{user.id} {user.username}</div>
                </Link>
              )
            }
          )
        }
      </div>
      <div style={{visibility:`${userData.visibility}`}} className={"popupContainer" + " " + styles.userPopupContainer} id="userPopupContainer">
          <h1>{userData.id}</h1>
          <h1>{userData.name}</h1>
          <h1>{userData.surname}</h1>
          <h2 onClick={() => {setUserData({visibility:"hidden"});}} class={"popupClose"}>X</h2>
      </div>
    </div>
  )
}

export default queue