import { useSelector } from "react-redux";

import styles from "./Today.module.css";

const Today = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];
  return (
    <div className={styles.today}>
      <span className={styles.oneul}>- 오늘의 메뉴 -</span>
      {dong.today.map((menu) => (
        <div>{menu}</div>
      ))}
    </div>
  );
};

export default Today;
