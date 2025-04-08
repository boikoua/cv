import React from 'react';
import styles from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  setIsOpen: (val: boolean) => void;
};

const BurgerMenu: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <div className={styles.burger}>
      <div className="container">
        <div className={styles.top}>
          <span
            onClick={() => setIsOpen(false)}
            className={`icon-close ${styles.close}`}
          ></span>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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

        <img className={styles.avatar} src="img/burger.png" alt="Avatar" />
      </div>
    </div>
  );
};

export default BurgerMenu;
