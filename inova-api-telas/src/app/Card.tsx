import styles from './page.module.css';

interface CardProps {
  title: string;
  members: string;
}

const Card = ({ title, members }: CardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{members}</p>
    </div>
  );
}

export default Card;
