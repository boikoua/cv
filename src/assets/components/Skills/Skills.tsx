import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <div className={styles.ellipse}></div>
        <h2 className={styles.title}>Skills</h2>

        <ul className={styles.items}>
          <li className={styles.item}>
            <img className={styles.icon} src="" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
