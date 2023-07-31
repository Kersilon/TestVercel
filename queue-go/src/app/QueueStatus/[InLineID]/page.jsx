import React from 'react'
import styles from "./InLineID.module.css"
import Image from 'next/image'
import Logo from "/public/Queue&GoLogoS.png"

export const metadata = {
    title: 'Queue Status'
  }

const userInLine = ({params}) => {
    console.log(params)
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.InLineID}</h1>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <button>button</button>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={Logo}
                    className={styles.img}
                    fill={true}
                />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <button>button</button>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={Logo}
                    className={styles.img}
                    fill={true}
                />
            </div>
        </div>
    </div>
  )
}

export default userInLine