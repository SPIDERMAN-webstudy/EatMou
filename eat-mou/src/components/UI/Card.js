import styles from "./Card.module.css";
const Card = (props) => {
  return <span className={styles.card}>{props.children}</span>;
};

export default Card;
