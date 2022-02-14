import { useState, useEffect } from "react";

import styles from "./LocationKitchenList.module.css";

const LocationKitchenList = (props) => {
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    if (props.distance < props.selectDistance) {
      setIsShort(true);
      console.log(isShort);
    } else {
      setIsShort(false);
    }
    console.log(isShort);
  }, [props.selectDistance]);

  return (
    <div>
      {isShort ? (
        <div className={styles.card}>
          <div className={styles.form}>
            <img className={styles.img} src={props.src} alt="" />
            <div className={styles.info}>
              <div className={styles.title}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.dangol}>{props.dangol}</div>
              </div>
              <div className={styles.today}>
                {props.today.map((item) => `${item}/`)}
              </div>
              <div className={styles.time}>
               {`${props.openTime}~${props.closeTime} `}
                <div className={styles.distance}>{`${props.distance}m`}</div>
              </div>
              <div className={styles.address}>
                {props.address}
                <span>{props.telephone}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default LocationKitchenList;
