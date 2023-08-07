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
    var usersData = [];

    for (let index = 1; index <= codaScelta.listaPersone; index++) {
      var user = mockDataUsersInLine.find(user => user.id == index);
      usersData.push(user);
      users.push(
        <Link href={""} className={styles.item}>
        <div onClick={() => {setUserData({id: usersData.at(index-1).id, name: usersData.at(index-1).name, surname: usersData.at(index-1).surname, visibility:"visible"});}} className={styles.title}>{user.id} {user.name} {user.surname}</div>
        </Link>
      )
    }

    return users;
  }

  var account = JSON.parse(localStorage.getItem('account'));
  var qrCodeButton;
  var qrCodePopup;

  if(account != null && account.tipo == 'azienda') {
    var qrCodeButton = <button onClick={openPopup} className="button">Ottieni codice QR</button>;

    var qrCodePopup = 
    <div className={"popupContainer" + " " + styles.qrPopupContainer} id="qrCodeContainer">
      <img class={styles.qrPopupImage} src="https://i.redd.it/r72kvnykeui41.png" alt="Qr code" />
      <h2 onClick={closePopup} class={"popupClose"}>X</h2>
    </div>;
  }

  var buttonUtente;
  var gobackButton;
  
  if((account != null ) && (account.tipo == "utente")){
    gobackButton = <button  href="/ricercaServizi" className={styles.buttonJoin}>Torna indietro</button>
    buttonUtente = <button className={styles.buttonJoin} onClick={handleJoin}>Unisciti alla fila</button>
  } else {
    gobackButton = ""
    buttonUtente = ""
  }

  var buttonCorretto;
  if((localStorage.getItem('joinQueue') == codaScelta.id)) {
    buttonCorretto = <button className={styles.buttonJoin} onClick={handleExit} >Esci dalla fila</button>;
  } else {
    buttonCorretto = <button className={styles.buttonJoin} onClick={handleJoin} >Unisciti alla fila (uscendo da quella corrente)</button>;
  }

  

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
      {gobackButton}
        {(localStorage.getItem('joinQueue') == null) ? (
          buttonUtente
        ) : (
          buttonCorretto
        )}
      {qrCodeButton}
      {isClosed && qrCodePopup}
      </div>
      
      <div classname={styles.containerInfo}>
          <h1 className={styles.info}>Nome della coda: {codaScelta.nome}</h1>
          <h1 className={styles.info}>{codaScelta.numPersone} persone in fila</h1>
          <h1 className={styles.info}>Tempo di attesa medio: {codaScelta.tempoMedioPersona} minuto/minuti</h1>
          <h1 className={styles.info}>Tempo stimato di attesa: {codaScelta.tempoMedioPersona * codaScelta.numPersone} minuto/minuti</h1>
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