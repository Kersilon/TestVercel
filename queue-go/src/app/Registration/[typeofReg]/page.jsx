"use client"
import Link from "next/link"
import React, {useState} from 'react'
import styles from "./Registration.module.css"
import { mockData } from "@/components/mockData";

const registration = ({params}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const account = JSON.parse(localStorage.getItem('account'));

  const payload = {
    username : username,
    password : password,
  };

  const setNewAccountUtente = async () => {
    const account = {
      username : username,
      password : password,
      tipo: "utente",
    };
    localStorage.setItem('account', JSON.stringify(account));
  };

  const setNewAccountAzienda = async () => {
    const account = {
      username : username,
      password : password,
      tipo : "azienda",
    };
    localStorage.setItem('account', JSON.stringify(account));
  };
  
  if(account != null) {
    return (
      <div className={styles.container}>
          Sei già registrato.
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
                    <input type="text"  placeholder="Name"/>
                    <input type="text"  placeholder="Surname"/>
                    <input type="text"  placeholder="Phone number"/>
                    <button className='button' href="" onClick={setNewAccountUtente}>Submit</button>
                </form>
            </div>
            <Link href="/"> Go back </Link>
        </div>
        )   
    } else {
      return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form className={styles.form} action="">
                  <p> Registrazione Gestore </p>
                    <input type="text"  placeholder="Username" />
                    <input type="text"  placeholder="Password"/>
                    <input type="text"  placeholder="Name"/>
                    <input type="text"  placeholder="Tax ID code"/>
                    <input type="text"  placeholder="Business address"/>
                    <button className='button' href="" onClick={setNewAccountAzienda}>Submit</button>
                </form>
            </div>
            <Link href="/"> Go back </Link>
        </div>
        ) 
    }
  }

}



export default registration