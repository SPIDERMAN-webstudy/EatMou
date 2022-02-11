import styles from "./MenuCard.module.css";

const MenuCard = (props) => {
  return <div className={styles.menucard}>{props.children}</div>;
};

export default MenuCard;
