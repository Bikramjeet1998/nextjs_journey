import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>

      <p className={styles.description}>
        If you have any questions, feel free to reach out!
      </p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className={styles.input}
        />

        <textarea
          placeholder="Your Message"
          required
          rows={5}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}
