"use client"
import Link from "next/link"
import styles from "./navbar.module.css"
import Logo from "/public/Queue&GoLogoS.png";
import Image from "next/image";

const links = [
  {
    id:1,
    title:"Homepage",
    url:"/",
  },
  {
    id:3,
    title:"QueueStatus",
    url:"/QueueStatus",
  },
  {
    id:4,
    title:"QueueCreate",
    url:"/QueueCreate"
  },
  {
    id:5,
    title:"About",
    url:"/about",
  }
]

const Navbar = () => {
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
            console.log("logged out");
          }}
        >
          Logout
        </button>
        <a href="/personalArea"><img src="" alt="" />personalArea</a>
      </div>
    </div>
  )
}

export default Navbar