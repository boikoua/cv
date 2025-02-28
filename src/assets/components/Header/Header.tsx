import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <span className={styles.logo}>&lt;DmytroBoiko /&gt;</span>

            <nav className={styles.nav}>
              <ul className={styles.items}>
                <li className={styles.item}>
                  <a className={styles.link} href="#skills">
                    Skills
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="projects">
                    Projects
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href="contacts">
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
