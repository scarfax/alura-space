import React from 'react';
import popularPhotos from './fotos-populares.json';
import styles from './Popular.module.css';

export default function Popular() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {popularPhotos.map((popularPhoto) => {
          return (
            <li key={popularPhoto.id}>
              <img src={popularPhoto.path} alt={popularPhoto.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
