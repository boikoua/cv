import Avatar from '../../components/Avatar';
import ProjectCard from '../../components/ProjectCard';
import styles from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar title="projects" />

          <div className={styles.projects}>
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
