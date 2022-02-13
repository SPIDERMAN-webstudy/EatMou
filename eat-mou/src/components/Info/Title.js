import { useSelector } from "react-redux";
import { useState } from "react";

import styles from "./Title.module.css";

const Title = (props) => {
  const [active, setActive] = useState(true);
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];

  const dangolchangeHandler = () => {
    setActive(false);
  };

  const dangolcancelHandler = () => {
    setActive(true);
  };

  return (
    <div>
      <span className={styles.name}>{dong.name}</span>
      <span className={styles.dangol}>{dong.dangol}</span>
      {active && (
        <h2 onClick={dangolchangeHandler} className={styles.bone}>
          🦴
        </h2>
      )}
      {!active && (
        <h2 onClick={dangolcancelHandler} className={styles.bone}>
          🍖
        </h2>
      )}
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
