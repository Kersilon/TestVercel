"use client"
import React from 'react'
import styles from "./ricercaServizi.module.css"
import { useState } from 'react'
import Link from 'next/link';
import { mockDataCode } from '@/components/mockDataCode';


const ricercaServizi= () => {
  
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleShowMore = () => setShowAll(!showAll);

  const filteredServizi = searchTerm
  ? mockDataCode.filter(servizio => servizio.nome.toLowerCase().includes(searchTerm.toLowerCase()))
  : mockDataCode.slice(0, showAll ? mockDataCode.length : 5);

  return (
    <div className={styles.serviziContainer}>
      <div className={styles.searchContainer}>
      <input
          type="text"
          placeholder="Search Services"
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <ul className={styles.serviziList}>
      {filteredServizi.slice(0, showAll ? filteredServizi.length : 5).map((servizio) => (
         <Link href={`/QueueStatus/${servizio.id}`}>
          <li key={servizio.id} className={styles.servizioItem}>
              {servizio.nome}
          </li>
          </Link>
        ))}
      </ul>
      {filteredServizi.length > 5 && !showAll && !searchTerm && (
        <button className={styles.showMore} onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );

}

export default ricercaServizi