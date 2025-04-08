import React from 'react';
import { IProject } from '../../types/IProject';
import styles from './ProjectCard.module.scss';

type Props = {
  project: IProject;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { preview, title, describe, stack, links } = project;

  return (
    <article className={styles.project}>
      <img src={`${preview}`} alt="Preview" />
      <div className={styles.top}>
        <h2>{title}</h2>

        <p>{describe}</p>
      </div>

      <div className={styles.bottom}>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={`${links.demo}`} target="_blank">
            <span className="icon-link"></span>
            <span>Demo</span>
          </a>
          <a href={`${links.github}`} target="_blank">
            <span className="icon-github"></span>
            <span>Github</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
