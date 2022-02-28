import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuCard from "../UI/MenuCard";
import styles from "./KitchenEdit.module.css";

const KitchenEditTtakgari = (props) => {
  const navigate = useNavigate();

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

  console.log(props);

  return (
    <div className={styles.editer}>
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
        <div>
          <input
            className={styles.inputt}
            type="text"
            value={today}
            placeholder="당신의 메뉴를 입력하세요"
            onChange={todayChangeHandler}
          />
          {props.today[0].text === undefined ? (
            <div>
              {props.today?.map((menu) => (
                <div key={Math.random()}>{menu}</div>
              ))}
            </div>
          ) : (
            <div>
              {props.today.map((menu) => (
                <div key={Math.random()}>{menu.text}</div>
              ))}
            </div>
          )}
        </div>
        <hr />
        <div className={styles.menu}>
          {props.menu?.map((item) => (
            <MenuCard id={item.id} key={Math.random()}>
              {console.log(item)}
              <img
                src={item.menuImg}
                alt={item.menuName}
                className={styles.menuImg}
              />
              <div className={styles.menuName}>{item.menuName}</div>
              <div className={styles.menuPrice}>{item.menuPrice}</div>
            </MenuCard>
          ))}
        </div>
        <button disabled={!isValid} className={styles.button}>
          저장하기
        </button>
      </form>
    </div>
  );
};

export default KitchenEditTtakgari;
