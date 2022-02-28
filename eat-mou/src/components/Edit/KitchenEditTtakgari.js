import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import styles from "./KitchenEdit.module.css";

const KitchenEditTtakgari = (props) => {
  const navigate = useNavigate();

  const nameRef = useRef("");
  const telephoneRef = useRef("");
  const addressRef = useRef("");
  const openTimeRef = useRef("");
  const closeTimeRef = useRef("");

  const [name, setName] = useState(props.name);
  const [telephone, setTelephone] = useState(props.telephone);
  const [address, setAddress] = useState(props.address);
  const [openTime, setOpenTime] = useState(props.openTime);
  const [closeTime, setCloseTime] = useState(props.closeTime);
  const [today, setToday] = useState("");
  const [isValid, setIsValid] = useState(false);

  const gobackHandler = () => {
    navigate(-1);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const telephoneChangeHandler = (event) => {
    setTelephone(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const opentimeChangeHandler = (event) => {
    setOpenTime(event.target.value);
  };
  const closetimeChangeHandler = (event) => {
    setCloseTime(event.target.value);
  };
  const todayChangeHandler = (event) => {
    setToday(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit!");
  };

  useEffect(() => {
    if (
      name.trim().length === 0 ||
      address.trim().length === 0 ||
      openTime.trim().length === 0 ||
      closeTime.trim().length === 0 ||
      telephone.trim().length === 0
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [name, address, openTime, closeTime, telephone]);

  return (
    <div>
      <span className={styles.back} onClick={gobackHandler}>
        back
      </span>
      <form onSubmit={submitHandler}>
        <input
          onChange={nameChangeHandler}
          placeholder="식당 이름"
          className={styles.input}
          value={name}
        />
        <input
          onChange={telephoneChangeHandler}
          placeholder="전화번호"
          className={styles.input}
          value={telephone}
        />
        <input
          onChange={addressChangeHandler}
          placeholder="주소"
          className={styles.input}
          value={address}
        />
        <span className={styles.time}>
          <input
            onChange={opentimeChangeHandler}
            placeholder="시작 시간"
            className={styles.open}
            value={openTime}
          />
          <input
            onChange={closetimeChangeHandler}
            placeholder="마감 시간"
            className={styles.close}
            value={closeTime}
          />
        </span>
        <hr />
        <div className={styles.today}>-오늘의 메뉴-</div>
        <div className={styles.inputForm}>
          <input
            className={styles.input}
            type="text"
            value={today}
            placeholder="당신의 메뉴를 입력하세요"
            onChange={todayChangeHandler}
          />
          {props.today.map((menu) => (
            <div key={Math.random()}>{menu}</div>
          ))}
        </div>
        <hr />
        <button disabled={!isValid} className={styles.button}>
          저장하기
        </button>
      </form>
    </div>
  );
};

export default KitchenEditTtakgari;
