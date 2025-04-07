import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <img
            className={styles.avatar}
            src="img/contacts.png"
            alt="My avatar"
            data-aos="zoom-in"
          />

          <div className={styles.content} data-aos="fade-up-left">
            <ul>
              <li>
                <img src="img/icons/contacts/phone.svg" alt="Phone" />
                <a href="tel:+380633484873">+380633484873</a>
              </li>
              <li>
                <img src="img/icons/contacts/gmail.svg" alt="Gmail" />
                <a href="mailto:iamboikodmytro@gmail.com">Gmail</a>
              </li>
              <li>
                <img src="img/icons/contacts/telegram.svg" alt="Telegram" />
                <a href="https://t.me/boiko_dmitry">Telegram</a>
              </li>
              <li>
                <img src="img/icons/contacts/linkedin.svg" alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/dmytro-boiko-18376b334/">
                  LinkedIn
                </a>
              </li>
              <li>
                <img src="img/icons/contacts/github.svg" alt="GitHub" />
                <a href="https://github.com/boikoua">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
