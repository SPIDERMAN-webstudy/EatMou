import styles from "./KitchenInfo.module.css";
import { Link } from "react-router-dom";

import Title from "./Title";
import Today from "./Today";
import Menu from "./Menu";
import { useSelector } from "react-redux";

const KitchenInfo = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];
  return (
    <div className={styles.info}>
      <img src={dong.kitchenImg} className={styles.img} />
      <Link to={"../search"} className={styles.back}>
        back
      </Link>
      <div className={styles.bg}>
        <Title />
        <hr className={styles.line}></hr>
        <Today />
        <hr className={styles.line}></hr>
        <Menu />
      </div>
    </div>
  );
};

export default KitchenInfo;
