import { useState } from "react";

import styles from "./Title.module.css";

const Title = (props) => {
  const [active, setActive] = useState(true);

  const dangolchangeHandler = () => {
    setActive(false);
  };

  const dangolcancelHandler = () => {
    setActive(true);
  };

  return (
    <div>
      <span className={styles.name}>{props.name}</span>
      <span className={styles.dangol}>{props.dangol}</span>
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
        {props.openTime}~{props.closeTime}
      </span>
      <br />
      <span className={styles.address}>{props.address}</span>
      <span className={styles.telephone}>{props.telephone}</span>
    </div>
  );
};

export default Title;
