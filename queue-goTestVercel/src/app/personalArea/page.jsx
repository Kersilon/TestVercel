"use client"
import React from 'react'
import styles from "./personalArea.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const PersonalArea= () => {
  var account = JSON.parse(localStorage.getItem('account'));
  const router = useRouter();

  if(account == null) {
    return (
      <div className={styles.container}>
          {router.push('/')}
      </div>
    )
  } else if(account.tipo == 'azienda') {
    return (
      <div className={styles.container}>
          <div className={styles.title}>
            <h1>Area Personale</h1>
          </div>
          <div className={styles.containerFeature}>
          <Link href="/personalArea">
            <div class={styles.feature}>
                <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/security._CB657833960_.png"/>
              <div class={styles.featureText}>Cambio Password</div>
            </div>
          </Link>  

          <Link href="/personalArea">
            <div class={styles.feature}>
                <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657833960_.png"/>
              <div class={styles.featureText} >Cambio Informazioni Personali</div>
            </div>
          </Link>  
          

          <Link href="/personalArea">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/YA_icon_Message_3._CB657833960_.png"/>
            <div class={styles.featureText} >Cronologia Queues</div>
          </div>
        </Link>

        <Link href="/personalArea">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/contact_us._CB659956575_.png"/>
            <div class={styles.featureText} >Supporto gestori & Feedback clienti</div>
          </div>
        </Link> 
        </div>
      </div>
    )
  } else if(account.tipo == 'utente') {
   return (
    <div className={styles.container}>
        <div className={styles.title}>
          <h1>Area Personale</h1>
        </div>
        <div className={styles.containerFeature}>
        <Link href="/personalArea">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/security._CB657833960_.png"/>
            <div class={styles.featureText}>Cambio Password</div>
          </div>
        </Link>  

        <Link href="/personalArea">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657833960_.png"/>
            <div class={styles.featureText} >Cambio Informazioni Personali</div>
          </div>
        </Link> 


        <Link href="/personalArea">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/YA_icon_Message_3._CB657833960_.png"/>
            <div class={styles.featureText} >Feedback inviati</div>
          </div>
        </Link>

        <Link href="/personalArea">
          <div class={styles.feature}>
              <img src="https://m.media-amazon.com/images/G/29/x-locale/cs/help/images/gateway/self-service/contact_us._CB659956575_.png"/>
            <div class={styles.featureText} >Supporto clienti</div>
          </div>
        </Link> 
        </div>
    </div>
  )
}}

export default PersonalArea