import { useState, useEffect } from "react";

import Card from "../UI/Card";
import styles from "./LocationKitchenList.module.css"

const LocationKitchenList = (props) => {
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    if (props.distance < props.selectDistance) {
      setIsShort(true);
      console.log(isShort);
    }
    else{
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
              <div className={styles.today}>{props.today}</div>
              <div className={styles.time}>
                {`${props.openTime}~${props.closeTime} `}
                {props.distance}
              </div>
              <div className={styles.address}>
                {props.address}
                {props.telephone}
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
