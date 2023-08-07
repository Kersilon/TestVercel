"use client"
import styles from "./homepage.module.css"
import React, {useState, useEffect} from 'react'
import { mockData } from "@/components/mockData";
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Homepage'
}

export default function index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("");
  const router = useRouter();

  //funzione che effettua la registrazione
  const LoginAccount = async () => {
    const account = {
      username : username,
      password : password,
      tipo : null,
    };
    var ind;
    mockData.forEach(function(item, index) {    
      if((item.username == account.username) && (item.password == account.password)){
        account.tipo = item.tipo;
        ind = index;
      }});
    if(ind <= mockData.length) {
      localStorage.setItem('account', JSON.stringify(mockData[ind]));
    } else {
      console.log("account non presente");
    }
    
  };

  //check dell'esistenza nella finestra delle variabili
  const account = JSON.parse(localStorage.getItem('account'));

  if (account != null) {
    return (
      <div className={styles.body}>
        <div className={styles.upperHalf}>
          {router.push('/personalArea')}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.body}>
        <p className={styles.welcomeTitle}> Benvenuto a Queue&Go </p>
        <div className={styles.upperHalf}>
          <div className={styles.inputContainer}>
            <form className="form" >
              <input className={styles.inputField} type="text" placeholder="Username" id="usernameInput" onChange={(e) => setUsername(e.target.value)}/>
              <input className={styles.inputField} type="text"  placeholder="Password" id="passwordInput" onChange={(e) => setPassword(e.target.value)}/>
              <button className='button' type="submit" href="/personalArea" onClick={LoginAccount}>
                Login
              </button>
            </form>
          </div>
          <p className={styles.betweenText}><strong className={styles.boldText}>oppure</strong>Crea un nuovo account</p>
        </div>
        <div className={styles.links}>
            <a className="button" href="/Registration/1"><p>Utente standard</p></a>
            <a className="button" href="/Registration/2"><p>Gestore attività</p></a>
        </div>
      </div>
    )
    
    

  }

}



  