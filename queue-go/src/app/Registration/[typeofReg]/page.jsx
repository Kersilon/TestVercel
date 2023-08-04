"use client"
import Link from "next/link"
import React, {useState} from 'react'
import styles from "./Registration.module.css"
import { mockData } from "@/components/mockData";
import { useRouter } from 'next/navigation'

const registration = ({params}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const account = JSON.parse(localStorage.getItem('account'));
  const router = useRouter();

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
    {router.push('/personalArea')}
  };

  const setNewAccountAzienda = async () => {
    const account = {
      username : username,
      password : password,
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
                    <input type="text"  placeholder="Name"/>
                    <input type="text"  placeholder="Surname"/>
                    <input type="text"  placeholder="Phone number"/>
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
                    <input type="text"  placeholder="Username" />
                    <input type="text"  placeholder="Password"/>
                    <input type="text"  placeholder="Name"/>
                    <input type="text"  placeholder="Tax ID code"/>
                    <input type="text"  placeholder="Business address"/>
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