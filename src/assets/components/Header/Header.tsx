import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import React from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const Header: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>&lt;DmytroBoiko/&gt;</div>

          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>

          <span
            onClick={() => setIsOpen(true)}
            className={`icon-burger ${styles.burger}`}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
