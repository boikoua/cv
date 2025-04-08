import { skills } from '../../api/skills';
import Avatar from '../../components/Avatar';
import { ISkill } from '../../types/ISkill';
import styles from './SkillsPage.module.scss';

function show(arr: ISkill[]) {
  return arr.map((item) => (
    <li className={styles.item} key={item.id}>
      <img className={styles.icon} src={item.icon} alt={item.title} />
      <span>{item.title}</span>
    </li>
  ));
}

const SkillsPage = () => {
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
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar title="skills" />

          <div className={styles.content}>
            <h3 className={styles.subtitle} data-aos="fade-right">
              Languages
            </h3>
            <ul className={styles.items} data-aos="fade-left">
              {show(languages)}
            </ul>

            <h3 className={styles.subtitle} data-aos="fade-right">
              Frameworks
            </h3>
            <ul className={styles.items} data-aos="fade-left">
              {show(frameworks)}
            </ul>

            <h3 className={styles.subtitle} data-aos="fade-right">
              CSS Frameworks
            </h3>
            <ul className={styles.items} data-aos="fade-left">
              {show(CSSFrameworks)}
            </ul>

            <h3 className={styles.subtitle} data-aos="fade-right">
              Tools
            </h3>
            <ul className={styles.items} data-aos="fade-left">
              {show(tools)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
