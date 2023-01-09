import React from 'react';
import styles from './Footer.module.css';
import facebook from 'assets/facebook.svg';
import twitter from 'assets//twitter.svg';
import instagram from 'assets//instagram.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icones}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  );
}
