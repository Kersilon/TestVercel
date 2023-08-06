'use client';

import React from 'react'
import styles from "./QueueStatus.module.css"
import Link from 'next/link'
import { useState } from 'react';
import { mockData } from '@/components/mockData';
import { mockDataCode } from '@/components/mockDataCode';

const path = "/QueueStatus/"


const queue = ({params}) => {
 var codaScelta = mockDataCode.find(coda => coda.id == params.IDQueue);

  const handleJoin = () => {
    localStorage.setItem('joinQueue', codaScelta.id);
    location.reload();
  };

  const handleExit = () => {
    localStorage.removeItem('joinQueue')
    location.reload();
  };

 


  const [userData, setUserData] = useState({
    id: 0,
    name: "placeholder",
    surname: "placeholder",
    visibility: "hidden"
  });
  
   const [isClosed, setIsClosed] = useState(false)

    function closePopup() {
      setIsClosed(false);
    }

    function openPopup() {
      setIsClosed(true);
    }

  var account = JSON.parse(localStorage.getItem('account'));
  var qrCodeButton;
  var qrCodePopup;

  if(account != null && account.tipo == 'azienda') {
    var qrCodeButton = <button onClick={openPopup} className="button">Generate QR code</button>;

    var qrCodePopup = 
    <div className={"popupContainer" + " " + styles.qrPopupContainer} id="qrCodeContainer">
      <img class={styles.qrPopupImage} src="https://i.redd.it/r72kvnykeui41.png" alt="Qr code" />
      <h2 onClick={closePopup} class={"popupClose"}>X</h2>
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
        {isClosed && qrCodePopup}
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
      <div className={styles.buttonContainer}>
      <a href="/ricercaServizi"><button  className={styles.buttonJoin}>Go back</button></a>
        {(localStorage.getItem('joinQueue') == null) ? (
          <button className={styles.buttonJoin} onClick={handleJoin}>Join queue</button>
        ) : (
          <button className={styles.buttonJoin} onClick={handleExit} >Exit queue</button>
        )}
      </div>
  </div>      
  )
}

export default queue