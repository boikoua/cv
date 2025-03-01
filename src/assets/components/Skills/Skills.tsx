import { skills } from '../../api/skills';
import { ISkill } from '../../types/ISkill';
import styles from './Skills.module.scss';

function show(arr: ISkill[]) {
  return arr.map((item) => (
    <li className={styles.item} key={item.id}>
      <img className={styles.icon} src={item.icon} alt={item.title} />
      <span>{item.title}</span>
    </li>
  ));
}

const Skills = () => {
  const languages = skills.filter((item) => item.category === 'language');

  const frameworks = skills.filter(
    (item) => item.category === 'framework' || item.category === 'library'
  );

  const CSSFrameworks = skills.filter(
    (item) =>
      item.category === 'css framework' || item.category === 'preprocessor'
  );

  const tools = skills.filter((item) => item.category === 'tools');

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.ellipse}></div>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.wrapper}>
          <h3 className={styles.subtitle}>Languages</h3>
          <ul className={styles.items}>{show(languages)}</ul>

          <h3 className={styles.subtitle}>Frameworks</h3>
          <ul className={styles.items}>{show(frameworks)}</ul>

          <h3 className={styles.subtitle}>CSS Frameworks</h3>
          <ul className={styles.items}>{show(CSSFrameworks)}</ul>

          <h3 className={styles.subtitle}>Tools</h3>
          <ul className={styles.items}>{show(tools)}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
