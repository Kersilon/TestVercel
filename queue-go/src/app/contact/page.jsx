import React from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
import Logo from "/public/Queue&GoLogoS.png"

const contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Titolo</h1>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <Image 
                    src={Logo} 
                    className={styles.image}
                />
            </div>
            <form action="" className={styles.form}>
                <input type="text" placeholder='name' className={styles.input}/>
                <input type="text" placeholder='email' className={styles.input}/>
                <textarea cols="30" rows="10" placeholder='description' className={styles.textArea}></textarea>
                <button url="#" text="send"></button>
                
            </form>
        </div>
    </div>
  )
}

export default contact