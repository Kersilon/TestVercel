"use client"
import Link from "next/link"
import styles from "./navbar.module.css"
import Logo from "/public/Queue&GoLogoS.png";
import Image from 'next/image'
import { mockData } from "@/components/mockData";

const linksAzienda = [
  {
    id:1,
    title:"Homepage",
    url:"/",
  },

  {
    id:2,
    title:"New Queue",
    url:"/QueueCreate"
  },
  {
    id:3,
    title:"About",
    url:"/about",
  }
]

const linksUnlogged = [
  {
    id:1,
    title:"Homepage",
    url:"/",
  },

  {
    id:2,
    title:"Join Queue",
    url:"/paginaMobile"
  },

  {
    id:3,
    title:"About",
    url:"/about",
  }
]


const Navbar = () => {
  var account = JSON.parse(localStorage.getItem('account'));
  var links = linksUnlogged;
  
  if (account != null && account.tipo == 'azienda'){
    links = linksAzienda;
    var button = <button className='button'onClick={() => { localStorage.removeItem('account'); location.reload();}} >Logout</button> 
  
  }else if(account !=null && account.tipo == 'utente'){
    var button = <button className='button'onClick={() => { localStorage.removeItem('account'); localStorage.removeItem('joinQueue'); location.reload();}} >Logout</button> 
  }
  if(localStorage.getItem('joinQueue') != null) {
    var idScelto = localStorage.getItem('joinQueue')
    var stringa = "/QueueStatus/" + idScelto
    var buttonCoda = <Link key='9' href={stringa} className={styles.link}> Check Queue </Link>
  }
  return (
      <div className={styles.container}>
        <a href="/"><img className={styles.logo} src="/Queue&GoLogoS.png" alt="" /></a>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))} 
          <div className={styles.desktopOnly}>
            <Link href="/paginaMobile" className={styles.link}>
                Trova servizio
            </Link>
          </div>
          {buttonCoda}
          {button}
          <div className={styles.navIcon}>
            <a  href="/personalArea">
              <Image src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg" width={29} height={29} alt="Personal Area" />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Navbar