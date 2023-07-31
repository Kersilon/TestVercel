"use client"
import Link from "next/link"
import styles from "./navbar.module.css"
import Logo from "/public/Queue&GoLogoS.png";
import Image from 'next/image'
import { mockData } from "@/components/mockData";

const links = [
  {
    id:1,
    title:"Homepage",
    url:"/",
  },
  {
    id:3,
    title:"Status Queue",
    url:"/QueueStatus",
  },
  {
    id:4,
    title:"Crea Queue",
    url:"/QueueCreate"
  },
  {
    id:5,
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
    id:3,
    title:"Status Queue",
    url:"/QueueStatus",
  },
  {
    id:5,
    title:"About",
    url:"/about",
  }
]

const Navbar = () => {
  var account = JSON.parse(localStorage.getItem('account'));
  if(account == null) {
    return (
      <div className={styles.container}>
      <a href="/"><img className={styles.logo} src="/Queue&GoLogoS.png" alt="" /></a>
      <div className={styles.links}>
        {linksUnlogged.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))} 
        <div className={styles.navIcon}>
        <a  href="/">
          <Image
          src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg"
          width={29}
          height={29}
          alt="Personal Area"
          />
        </a>
        </div>
      </div>
    </div>
    )
  } else {
  return (
    <div className={styles.container}>
      <a href="/"><img className={styles.logo} src="/Queue&GoLogoS.png" alt="" /></a>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
    
        <button 
          className='button'
          onClick={() => {
            localStorage.removeItem('account');
            location.reload();
          }}
        >
          Logout
        </button> 
        <div className={styles.navIcon}>
        <a  href="/personalArea">
          <Image
          src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg"
          width={29}
          height={29}
          alt="Personal Area"
          />
        </a>
        </div>
      </div>
    </div>
  )
  }
}

export default Navbar