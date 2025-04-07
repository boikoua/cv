import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.wrapper}>
          <img className={styles.avatar} src="img/avatar.png" alt="My avatar" />

          <div className={styles.content}>
            <h2>Hi! My name's Dmytro Boiko</h2>

            <h1>I'm Front-end Developer</h1>

            <p>
              My goal is to develop fast, intuitive, and aesthetically pleasing
              interfaces that provide users with a seamless experience. I pay
              close attention to responsiveness and cross-browser compatibility,
              follow best development practices, and strive for clean,
              maintainable code. I am always open to new technologies and
              constantly improving my skills to create high-quality web
              solutions. 🚀
            </p>

            <a
              className={styles.btn}
              href="https://drive.google.com/uc?export=download&id=1J5Saw8eTtihnKH6n5taqeHxi8ueakTC5"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
