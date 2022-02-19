import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import FoodList from "./FoodList";

import styles from "./KitchenAdd.module.css";

const KitchenAdd = (props) => {
  const nameRef = useRef("");
  const addressRef = useRef("");
  const closeTimeRef = useRef("");
  const dangolRef = useRef(0);
  const distanceRef = useRef(300);
  const idRef = useRef();
  const kitchenImgRef = useRef("");
  const menuRef = useRef([]);
  const openTimeRef = useRef("");
  const telephoneRef = useRef("");
  const todayRef = useRef([]);
  //------------------------------Today음식 추가리스트 만들기----------------------------------------------
  const [todayList, setTodayList] = useState([]);
  // todayList = useRef([]);
  //--------------------------firebase에 데이터 POST하기---------------------------------
  async function addKitchenHandler(kitchen) {
    const response = await fetch(
      "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json",
      {
        method: "POST",
        body: JSON.stringify(kitchen),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const kitchen = {
      name: nameRef.current.value, //
      telphone: telephoneRef.current.value, //
      address: addressRef.current.value, //
      openTime: openTimeRef.current.value, //
      closeTime: closeTimeRef.current.value, //
      dangol: dangolRef.current.value, //일단 0
      distance: distanceRef.current.value, //일단 0
      id: idRef.current.value, // 랜덤값
      kitchenImg: kitchenImgRef.current.value, //일단 아무거나
      menu: menuRef.current.value,
      today: todayRef.current.value,
    };
    console.log(todayRef.current.value);
    addKitchenHandler(kitchen);
    event.target.reset();
    console.log(kitchen);
  };
  //---------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Link to={"../location"}>
        <button className={styles.button}>Back</button>
      </Link>
      <form className={styles.form} ref={idRef} onSubmit={submitHandler}>
        <div className={styles.picture} ref={kitchenImgRef}>
          식당 사진을 추가해 주세요
        </div>
        <input placeholder="식당 이름" className={styles.input} ref={nameRef} />
        <input
          placeholder="전화번호"
          className={styles.input}
          ref={telephoneRef}
        />
        <input placeholder="주소" className={styles.input} ref={addressRef} />
        <span className={styles.time}>
          <input
            placeholder="영업 시작 시간"
            className={styles.openTime}
            ref={openTimeRef}
          />
          <input
            placeholder="영업 마감 시간"
            className={styles.closeTime}
            ref={closeTimeRef}
          />
        </span>
        <div>
          <InputBox
            todayList={todayList}
            setTodayList={setTodayList}
            ref={todayList}
          />
          <FoodList
            title={"-오늘의 메뉴-"}
            todayList={todayList}
            setTodayList={setTodayList}
            ref={todayRef}
          />
        </div>
        <button className={styles.registerButton}>등록하기</button>
      </form>
    </div>
  );
};

export default KitchenAdd;
