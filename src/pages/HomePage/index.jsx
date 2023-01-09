import React from 'react';
import styles from './HomePage.module.css';

import Header from 'components/Header';
import Menu from 'components/Menu';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Galery from 'components/Gallery';
import Popular from 'components/Popular';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}
