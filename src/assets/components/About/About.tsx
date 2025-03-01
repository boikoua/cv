import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.bg}></div>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.greeting}>Hi! I'm Dmytro Boiko</p>

          <img className={styles.avatar} src="./img/avatar.png" alt="Avatar" />

          <h1 className={styles.title}>Frontend Developer</h1>
          <p className={styles.text}>
            My goal is to develop fast, intuitive, and aesthetically pleasing
            interfaces that provide users with a seamless experience. I pay
            close attention to responsiveness and cross-browser compatibility,
            follow best development practices, and strive for clean,
            maintainable code. I am always open to new technologies and
            constantly improving my skills to create high-quality web solutions.
            🚀
          </p>
          <div className={styles.btns}>
            <a className={styles.btn} href="#contacts">
              Get In Touch
            </a>
            <a
              className={styles.btn}
              href="https://drive.google.com/uc?export=download&id=1aYyWjB01G-yhvyiqZgrpVtel1IL53sHp"
              download
            >
              Download CV
            </a>
          </div>
          <div className={styles.ellipse}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
