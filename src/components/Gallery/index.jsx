import React, { useState } from 'react';
import Tags from '../Tags';
import styles from './Galery.module.css';
import photos from './photos.json';
import Cards from './Cards';

export default function Galery() {
  const [itens, setItens] = useState(photos);

  const tags = [...new Set(photos.map((value) => value.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(newPhotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
