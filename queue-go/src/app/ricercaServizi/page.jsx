"use client"
import React from 'react'
import styles from "./ricercaServizi.module.css"
import { useState } from 'react'
import Link from 'next/link';
import { mockDataCode } from '@/components/mockDataCode';


const RicercaServizi= () => {
  
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleShowMore = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  const filteredServizi = mockDataCode.filter(servizio =>
    servizio.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedServizi = showAll ? filteredServizi : filteredServizi.slice(0, 5);

  return (
    <div className={styles.serviziContainer}>
      <div className={styles.searchContainer}>
      <input
          type="text"
          placeholder="Cerca attività"
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <ul className={styles.serviziList}>
      {displayedServizi.map((servizio) => (
         <Link href={`/QueueStatus/${servizio.id}`}>
          <li key={servizio.id} className={styles.servizioItem}>
              {servizio.nome}
          </li>
          </Link>
        ))}
      </ul>
      {filteredServizi.length > 5 && !showAll && (
        <button className={styles.showMore} onClick={handleShowMore}>Mostra altro</button>
      )}
    </div>
  );

}

export default RicercaServizi