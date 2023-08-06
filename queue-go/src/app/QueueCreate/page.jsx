"use client";

import React from 'react'
import { useState } from 'react'
import styles from "./QueueCreate.module.css"
import { useRouter } from 'next/navigation'

export const metadata = {
  title: 'Queue Creation'
}


const createQueue = () => {

  const [personalizedPopupIsVisible, setPersonalizedPopupIsVisible] = useState({
    visibility: "hidden"
  })

  const router = useRouter();

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Create queue page</h1>
        <div className={styles.buttons}>
            <a className="button"  href="/QueueStatus/1">Create simple Queue</a>
            <a onClick={() => {setPersonalizedPopupIsVisible({visibility:"visible"});}} className="button">Create personalized Queue</a>
        </div>
        <div style={{visibility:`${personalizedPopupIsVisible.visibility}`}} className={"popupContainer" + " " + styles.personalizedPopupContainer}>
          <form action="/QueueStatus/1">
            <h2 className={styles.formSection}>Minimum age:</h2>
            <p>
              <label><input type="radio" name='age'/>Yes</label>
              <label><input type="number" name='ageNumber'/></label>
            </p>
            <p><label><input type="radio" name='age'/>No</label></p>

            <h2 className={styles.formSection}>Free to join:</h2>
            <p><label><input type="radio" name='fjoin'/>Yes</label></p>
            <p>
              <label><input type="radio" name='fjoin'/>No</label>
              <label><input type="number" name='fjoinPrice'/> €</label>
            </p>

            <h2 className={styles.formSection}>Limit of people in line:</h2>
            <p>
              <label><input type="radio" name='limitOfPeople'/>Yes</label>
              <label><input type="number" name='limitOfPeopleValue'/></label>
            </p>
            <p><label><input type="radio" name='limitOfPeople'/>No</label></p>

            <input type="submit" onclick value={"Submit"}/>
          </form>
          <h2 onClick={() => {setPersonalizedPopupIsVisible({visibility:"hidden"});}} class={"popupClose"}>X</h2>
      </div>
    </div>
  )
}

export default createQueue