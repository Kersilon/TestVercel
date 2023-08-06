"use client"
import Link from "next/link"
import React, {useState} from 'react'
import styles from "./Registration.module.css"
import { mockData } from "@/components/mockData";
import { useRouter } from 'next/navigation'

const registration = ({params}) => {
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
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                  <p> Registrazione Utente </p>
                    <input type="text"  placeholder="Username" id="usernameInput" onChange={(e) => setUsername(e.target.value)} />
                    <input type="text"  placeholder="Password" id="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                    <input type="text"  placeholder="Name" id="nameInput" onChange={(e) => setName(e.target.value)}/>
                    <input type="text"  placeholder="Surname" id="surnameInput" onChange={(e) => setSurname(e.target.value)}/>
                    <input type="text"  placeholder="Phone number" id="phoneInput" onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <button className='button' href="/personalArea" onClick={setNewAccountUtente}>Submit</button>
                </form>
            </div>
            <a className={styles.buttonReg} href="/"> Go back </a>
        </div>
        )   
    } else {
      return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form} action="">
                  <p> Registrazione Gestore </p>
                    <input type="text"  placeholder="Username" id="usernameInput" onChange={(e) => setUsername(e.target.value)} />
                    <input type="text"  placeholder="Password" id="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                    <input type="text"  placeholder="Name" id="nameInput" onChange={(e) => setName(e.target.value)} />
                    <input type="text"  placeholder="Tax ID code" id="taxIDInput" onChange={(e) => setTaxIDCode(e.target.value)} />
                    <input type="text"  placeholder="Business address" id="bussAddInput" onChange={(e) => setBussAddress(e.target.value)} />
                    <button className='button' href="/personalArea" onClick={setNewAccountAzienda}>Submit</button>
                </form>
            </div>
            <a className={styles.buttonReg} href="/"> Go back </a>
        </div>
        ) 
    }
  }

}



export default registration