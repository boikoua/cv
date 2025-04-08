import Avatar from '../../components/Avatar';
import styles from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar title="projects" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
