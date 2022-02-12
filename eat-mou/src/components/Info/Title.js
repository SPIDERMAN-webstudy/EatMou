import { useSelector } from "react-redux";

import styles from "./Title.module.css";
import Button from "../UI/Button";

const Title = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];
  return (
    <div>
      <span className={styles.name}>{dong.name}</span>
      <span className={styles.dangol}>{dong.dangol}</span>
      <Button>🦴</Button>
      <span className={styles.time}>
        {dong.openTime}~{dong.closeTime}
      </span>
      <br />
      <span className={styles.address}>{dong.address}</span>
      <span className={styles.telephone}>{dong.telephone}</span>
    </div>
  );
};

export default Title;
