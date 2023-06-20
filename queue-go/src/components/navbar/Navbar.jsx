"use client"
import Link from "next/link"
import styles from "./navbar.module.css"

const links = [
  {
    id:1,
    title:"Homepage",
    url:"/",
  },
  {
    id:2,
    title:"Dashboard",
    url:"/dashboard",
  },
  {
    id:3,
    title:"QueueStatus",
    url:"/queue",
  }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>logo</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button 
          className={styles.logout} 
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar