import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  //------------------------------------단골 뼈다귀 구현---------------------------------------------------
  const [show, setshow] = useState(true);
  const navigate = useNavigate();
  const DANGOL = "Dangol";
  let bone = [];
  const t = localStorage.getItem(DANGOL);
  if (t !== null) {
    const parse = JSON.parse(t);
    bone = parse;
  }
  useEffect(() => {
    const t = localStorage.getItem(DANGOL);
    if (t !== null) {
      const parse = JSON.parse(t);
      const CheckBone = parse.filter(function (element) {
        return element.id === props.id;
      });
      if (CheckBone.length !== 0) {
        setshow(false);
      }
    }
  }, []);
  const boneLocalSet = () => {
    localStorage.setItem(DANGOL, JSON.stringify(bone));
    if (bone.length === 0) {
      localStorage.removeItem(DANGOL);
    }
  };
  const boneHandler = () => {
    bone.push(props);
    boneLocalSet();
    setshow(false);
  };
  const boneCancelHandler = (event) => {
    const d = event.target;
    const li = event.target.parentElement;
    const Delbone = bone.filter(function (element, index) {
      return element.id !== props.id;
    });
    bone = Delbone;
    boneLocalSet();
    setshow(true);
  };

  return (
    <div>
      {isShort ? (
        <div className={styles.card}>
          <div className={styles.form}>
            <img className={styles.img} src={props.src} alt="" />
            <div className={styles.info}>
              <div className={styles.title}>
                <div className={styles.name}>{props.name}</div>
                {show && (
                  <span className={styles.cursor} onClick={boneHandler}>
                    🦴 {props.dangol}
                  </span>
                )}
                {!show && (
                  <span className={styles.cursor} onClick={boneCancelHandler}>
                    🍖 {props.dangol + 1}
                  </span>
                )}
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
