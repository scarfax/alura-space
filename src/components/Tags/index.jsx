import React from 'react';
import styles from './Tags.module.scss';
import photos from '../Gallery/photos.json';

export default function Tags({ tags, filterPhotos, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPhotos(tag)}>
              {tag}
            </li>
          );
        })}

        <li onClick={() => setItens(photos)}>Todas</li>
      </ul>
    </div>
  );
}
