import Navbar from "../components/navbar/Navbar";
import Logo from "/public/Queue&GoLogoS.png";
import Image from "next/image";
import styles from "./homepage.module.css"
import Button from '@/components/Button/Button'

export default function index() {
  return (
      <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Queue&Go
            </h1>
            <p className={styles.desc}>
              Benvenuto nella homepage!
            </p>
            <Button url="/login" text="Crea una fila" />
          </div>
          <div className={styles.item}>
            <Image src={Logo} alt="Logo" className={styles.img}></Image>
          </div>
      </div>
  )
}