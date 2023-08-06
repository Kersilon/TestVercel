'use client';

import React from 'react'
import styles from "./QueueStatus.module.css"
import Link from 'next/link'
import { useState } from 'react';
import { mockData } from '@/components/mockData';
import { mockDataCode } from '@/components/mockDataCode';
import { mockDataUsersInLine } from '@/components/mockDataUsersInLine';

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

    function usersInLine(){
    var users = [];

    for (let index = 1; index <= codaScelta.listaPersone; index++) {
      var user = mockDataUsersInLine.find(user => user.id == index);
      console.log(user);
      users.push(
        <Link href={""} className={styles.item}>
        <div onClick={() => {setUserData({id: user.id, name: user.name, surname: user.surname, visibility:"visible"});}} className={styles.title}>{user.id} {user.name} {user.surname}</div>
        </Link>
      )
    }

    return users;
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
  }

  var buttonUtente;
  var gobackButton;
  
  if((account != null ) && (account.tipo == "utente")){
    gobackButton = <a href="/ricercaServizi"><button  className={styles.buttonJoin}>Go back</button></a>
    buttonUtente = <button className={styles.buttonJoin} onClick={handleJoin}>Join queue</button>
  } else {
    gobackButton = ""
    buttonUtente = ""
  }

  var buttonCorretto;
  if((localStorage.getItem('joinQueue') == codaScelta.id)) {
    buttonCorretto = <button className={styles.buttonJoin} onClick={handleExit} >Exit queue</button>;
  } else {
    buttonCorretto = <button className={styles.buttonJoin} onClick={handleJoin} >Join queue (uscendo da quella corrente)</button>;
  }

  

  return (
    <div className={styles.container}>
      <div className={styles.lineInfo}>
        <div className={styles.infos}>
          <h1 className={styles.info}>Nome della coda: {codaScelta.nome}</h1>
          <h1 className={styles.info}>{codaScelta.numPersone} persone in fila</h1>
          <h1 className={styles.info}>Tempo di attesa medio: {codaScelta.tempoMedioPersona} minuto/minuti</h1>
          <h1 className={styles.info}>Tempo stimato di attesa: {codaScelta.tempoMedioPersona * codaScelta.numPersone} minuto/minuti</h1>
        </div>
        {qrCodeButton}
        {isClosed && qrCodePopup}
      </div>
      <div className={styles.items}>
        {usersInLine()}
        {(localStorage.getItem('joinQueue') == codaScelta.id) ? (
                  <Link href={""} className={styles.item}>
                  <div onClick={() => {setUserData({id: account.id, name: account.name, surname: account.surname, visibility:"visible"});}} className={styles.title}>{mockDataUsersInLine.length + 1} {account.name} {account.surname}</div>
                  </Link>
        ) : (
          <> </>
        )}
      </div>
      <div style={{visibility:`${userData.visibility}`}} className={"popupContainer" + " " + styles.userPopupContainer} id="userPopupContainer">
          <h1>{userData.id}</h1>
          <h1>{userData.name}</h1>
          <h1>{userData.surname}</h1>
          <h2 onClick={() => {setUserData({visibility:"hidden"});}} class={"popupClose"}>X</h2>
      </div>
      <div className={styles.buttonContainer}>
      {gobackButton}
        {(localStorage.getItem('joinQueue') == null) ? (
          buttonUtente
        ) : (
          buttonCorretto
        )}
      </div>
  </div>      
  )
}

export default queue