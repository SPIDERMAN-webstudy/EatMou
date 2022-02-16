import styles from "./Today.module.css";

const Today = (props) => {
  return (
    <div className={styles.today}>
      <span className={styles.oneul}>- 오늘의 메뉴 -</span>
      {props.today.map((menu) => (
        <div>{menu}</div>
      ))}
    </div>
  );
};

export default Today;
