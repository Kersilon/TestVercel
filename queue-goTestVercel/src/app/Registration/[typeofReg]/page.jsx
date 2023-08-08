"use client"
import Link from "next/link"
import React, {useState} from 'react'
import styles from "./Registration.module.css"
import { mockData } from "@/components/mockData";
import { useRouter } from 'next/navigation'

const Registration = ({params}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameAcc, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [taxIDCode, setTaxIDCode] = useState("");
  const [bussAddress, setBussAddress] = useState("");
  const account = JSON.parse(localStorage.getItem('account'));
  const router = useRouter();
  
  const payload = {
    id: (mockData.length + 1),
    username : username,
    password : password,
    name : nameAcc,
    surname : surname,
    phoneNumber : phoneNumber,
    taxIDCode : taxIDCode,
    bussAddress : bussAddress,
  };

  const setNewAccountUtente = async () => {
    const account = {
      username : username,
      password : password,
      name : nameAcc,
      surname : surname,
      phoneNumber: phoneNumber,
      taxIDCode : "",
      bussAddress : "",
      tipo: "utente",
    };
    localStorage.setItem('account', JSON.stringify(account));
    {router.push('/personalArea')}
  };

  const setNewAccountAzienda = async () => {
    const account = {
      username : username,
      password : password,
      name : nameAcc,
      surname : surname,
      phoneNumber : "",
      taxIDCode : taxIDCode,
      bussAddress : bussAddress,
      tipo : "azienda",
    };
    localStorage.setItem('account', JSON.stringify(account));
    {router.push('/personalArea')}
  };
  console.log(account);
  if(account != null) {
    return (
      <div className={styles.container}>
          {router.push('/personalArea')}
      </div>
    )
  } else {
    if (params.typeofReg == 1) {
        return (
        <div className={styles.outerContainer}>
            <div className={styles.cardContainer}>
            <p className={styles.titleReg}> Registrazione Utente </p>
                <form className={styles.formContainer}>
                    <input className={styles.inputField} type="text"  placeholder="Username" id="usernameInput" onChange={(e) => setUsername(e.target.value)} />
                    <input className={styles.inputField} type="text"  placeholder="Password" id="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                    <input className={styles.inputField} type="text"  placeholder="Nome" id="nameInput" onChange={(e) => setName(e.target.value)}/>
                    <input className={styles.inputField} type="text"  placeholder="Cognome" id="surnameInput" onChange={(e) => setSurname(e.target.value)}/>
                    <input className={styles.inputField} type="text"  placeholder="Numero di telefono" id="phoneInput" onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <button className={styles.submitButton}  href="/personalArea" onClick={setNewAccountUtente}>Registrati</button>
                </form>
            <div className={styles.containerPulsanti}>
            <a className={styles.buttonReg} href="/"> Torna Indietro </a>
            </div>
            </div>
            
        </div>
        )   
    } else {
      return (
        <div className={styles.outerContainer}>
            <div className={styles.cardContainer}>
            <p className={styles.titleReg}> Registrazione Gestore </p>
                <form className={styles.formContainer} action="">
                    <input className={styles.inputField} type="text"  placeholder="Username" id="usernameInput" onChange={(e) => setUsername(e.target.value)} />
                    <input className={styles.inputField} type="text"  placeholder="Password" id="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                    <input className={styles.inputField} type="text"  placeholder="Nome" id="nameInput" onChange={(e) => setName(e.target.value)} />
                    <input className={styles.inputField} type="text"  placeholder="Cognome" id="surnameInput" onChange={(e) => setSurname(e.target.value)}/>
                    <input className={styles.inputField} type="text"  placeholder="Codice fiscale" id="taxIDInput" onChange={(e) => setTaxIDCode(e.target.value)} />
                    <input className={styles.inputField} type="text"  placeholder="Indirizzo attività" id="bussAddInput" onChange={(e) => setBussAddress(e.target.value)} />
                    <button className={styles.submitButton} href="/personalArea" onClick={setNewAccountAzienda}>Registrati</button>
                </form>
            <div className={styles.containerPulsanti}>
            <a className={styles.buttonReg} href="/"> Torna Indietro </a>
            </div>
            </div>
           
        </div>
        ) 
    }
  }

}



export default Registration