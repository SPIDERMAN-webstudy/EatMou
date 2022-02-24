import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchKitchenList.module.css";
const SearchKitchenList = (props) => {
  const [show, setshow] = useState(true);
  const DANGOL = "Dangol";
  const navigate = useNavigate();
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
      console.log(parse);
      const CheckBone = parse.filter(function (element) {
        return element.id === props.id;
      });
      if (CheckBone.length !== 0) {
        setshow(false);
      }
    }
  }, [bone]);
  const boneLocalSet = () => {
    localStorage.setItem(DANGOL, JSON.stringify(bone));
    console.log(bone);
    if (bone.length === 0) {
      localStorage.removeItem(DANGOL);
    }
  };
  const infoHandler = () => {
    navigate(`/kitchen/${props.id}`, { state: props.name });
  };
  const boneHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(DANGOL));
    if (prevData !== null) {
      bone = prevData;
    }
    bone.push(props);
    boneLocalSet();
    setshow(false);
  };
  const boneCancelHandler = (event) => {
    const prevData = JSON.parse(localStorage.getItem(DANGOL));
    if (prevData !== null) {
      bone = prevData;
    }
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
    <div className={styles.content}>
      <img src={props.img} onClick={infoHandler} />
      <div className={styles.info}>
        <div className={styles.head}>
          <h2>{props.name}</h2>
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
        {props.today === "undefined" && (
          <div>
            {props.today[0].text === "undefined" ? (
              <span className={styles.Today}>
                {console.log("hi")} Today:
                {props.today?.map((value) => (
                  <span key={Math.random()}>{value}/</span>
                ))}
              </span>
            ) : (
              <span className={styles.Today}>
                Today:
                {props.today.map((value) => (
                  <span key={Math.random()}>{value.text}/</span>
                ))}
              </span>
            )}
          </div>
        )}
        <span className={styles.time}>
          {props.openTime}~{props.closeTime}
        </span>
        <div className={styles.bottom}>
          <span>{props.address}</span>
          <span>Tel:{props.telephone}</span>
          <span>거리:{props.distance}</span>
        </div>
      </div>
    </div>
  );
};
export default SearchKitchenList;
