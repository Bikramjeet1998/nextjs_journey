// components/Card.js
import styles from '@/styles/Card.module.css';

export default function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  )
}
