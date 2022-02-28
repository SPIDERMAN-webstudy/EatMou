import styles from "./Today.module.css";

const Today = (props) => {
  return (
    <div className={styles.today}>
      <span className={styles.oneul}>- 오늘의 메뉴 -</span>
      {props.today[0].text === undefined ? (
        <span>
          {props.today.map((menu) => (
            <div key={Math.random()}>{menu}</div>
          ))}
        </span>
      ) : (
        <span>
          {props.today.map((menu) => (
            <div key={Math.random()}>{menu.text}</div>
          ))}
        </span>
      )}
    </div>
  );
};

export default Today;
