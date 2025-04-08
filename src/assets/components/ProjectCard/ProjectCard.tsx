import styles from './ProjectCard.module.scss';

const ProjectCard = () => {
  return (
    <article className={styles.project}>
      <img src="img/projects/1.jpg" alt="Preview" />
      <div className={styles.top}>
        <h2>Delote Beauty</h2>

        <p>
          It's a modern lending site for an interior design studio, developed
          using NextJS and TypeScript. The project uses SCSS for modular styles,
          which provides easy support and clean code. The site is fully
          adaptive, displaying correctly on all devices - from cell phones to
          desktops. Thanks to smooth animations and transitions, the interface
          looks dynamic and attractive. The project is optimized for fast
          loading and provides a smooth user experience.
        </p>
      </div>

      <div className={styles.bottom}>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next JS</li>
          <li>Git</li>
          <li>Vite</li>
        </ul>

        <div className={styles.links}>
          <a href="https://delote-beauty-kappa.vercel.app/">
            <span className="icon-link"></span>
            <span>Demo</span>
          </a>
          <a href="https://github.com/boikoua/delote-beauty">
            <span className="icon-github"></span>
            <span>Github</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
