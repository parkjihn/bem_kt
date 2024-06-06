import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/" className={styles.navLink}>Главная</Link></li>
          <li className={styles.navItem}><Link to="/contract" className={styles.navLink}>Оформить договор</Link></li>
          <li className={styles.navItem}><Link to="/support" className={styles.navLink}>Техническая поддержка</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
