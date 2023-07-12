import React from 'react'
import styles from "./Registration.module.css"

const registration = () => {
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <form className={styles.form} action="">
                <input type="text"  placeholder="Username" />
                <input type="text"  placeholder="Password"/>
                <input type="text"  placeholder="Name"/>
                <input type="text"  placeholder="Surname"/>
                <input type="text"  placeholder="Tax ID code"/>
                <input type="text"  placeholder="Phone number"/>
                <input type="text"  placeholder="Business address"/>
                <button className='button' href="">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default registration