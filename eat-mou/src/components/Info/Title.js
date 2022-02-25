import { useEffect, useState } from "react";

import styles from "./Title.module.css";

const Title = (props) => {
  const [active, setActive] = useState(true);
  let dangol = [];
  const DANGOL = "Dangol";
  const lo = localStorage.getItem(DANGOL);

  if (lo !== null) {
    const parse = JSON.parse(lo);
    dangol = parse;
  }

  useEffect(() => {
    const t = localStorage.getItem(DANGOL);
    if (t !== null) {
      const par = JSON.parse(t);
      const checkBone = par.filter((elem) => {
        return elem.id === props.id;
      });
      if (checkBone.length !== 0) {
        setActive(false);
      }
    }
  }, []);

  const boneLocalSet = () => {
    localStorage.setItem(DANGOL, JSON.stringify(dangol));
    if (dangol.length === 0) {
      localStorage.removeItem(DANGOL);
    }
  };

  const dangolchangeHandler = () => {
    dangol.push(props);
    boneLocalSet();
    setActive(false);
  };

  const dangolcancelHandler = () => {
    const newDangol = dangol.filter((elem) => {
      return elem.id !== props.id;
    });
    dangol = newDangol;
    boneLocalSet();
    setActive(true);
  };

  return (
    <div className={styles.title}>
      <h1 className={styles.name}>{props.name}</h1>
      {active && (
        <h2 onClick={dangolchangeHandler} className={styles.dangol}>
          {props.dangol} 🦴
        </h2>
      )}
      {!active && (
        <h2 onClick={dangolcancelHandler} className={styles.dangol}>
          {props.dangol + 1} 🍖
        </h2>
      )}
      <br />
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
