import React from 'react';
import logo from './logo.png';
import search from './search.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="lugo do Alura Space" />
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          placeholder="O que você procura? "
        />
        <img src={search} alt="Ícone de lupa" />
      </div>
    </header>
  );
}
