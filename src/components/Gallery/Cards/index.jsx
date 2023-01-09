import React from 'react';
import open from './open.png';
import favorite from './favorito.png';

export default function Cards({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.image}
              alt={item.title}
            />
            <p className={styles.galeria__descricao}>{item.title}</p>
            <div>
              <p>{item.credits}</p>
              <span>
                <img src={favorite} alt="ícone coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
