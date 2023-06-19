import Navbar from "../components/navbar/Navbar";
import Logo from "/public/Queue&GoLogoS.png";
import Image from "next/image";
import styles from "./homepage.module.css"

export default function index() {
  return (
      <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Hompage-titolo
            </h1>
            <p className={styles.desc}>
              Homepage-descrizione
            </p>
            <button className={styles.button}>
              Homepage-pulsante
            </button>
          </div>
          <div className={styles.item}>
            <Image src={Logo} alt="Logo" className={styles.img}></Image>
          </div>
      </div>
  )
}