import React, { useEffect, useRef, useState } from "react";
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
    const distance = parseInt(Math.floor(Math.random()*1490+10))//거리 10m에서 1500m까지 랜덤 설정
    const dangol = 0;
    const kitchenImg = "https://missioninfra.net/img/noimg/noimg_4x3.gif"
    const kitchen = {
      name: nameRef.current.value, //
      telphone: telephoneRef.current.value, //
      address: addressRef.current.value, //
      openTime: openTimeRef.current.value, //
      closeTime: closeTimeRef.current.value, //
      dangol: dangol, //일단 0
      distance: distance, //랜덤값
      id: idRef.current.value, // 랜덤값
      kitchenImg: kitchenImg, //일단 이미지 없음 표시
      menu: menuRef.current.value,
      today: todayList,
    };
    setTodayList([]);
    URL.revokeObjectURL(fileImage);
    setFileImage("");
    setFIleIsValid(false);
    console.log(todayRef.current.value);
    addKitchenHandler(kitchen);
    event.target.reset();
    console.log(nameRef);
    window.confirm("등록되었습니다.");
  };
  //---------------------------------식당 사진 업로드--------------------------------------------------------------------------------------------
  const [fileImage, setFileImage] = useState("");
  const [fileIsValid, setFIleIsValid] = useState(false);

  // if(fileImage!==""){
  //   setFIleIsValid(true);
  // }

  //파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // kitchenImgRef(URL.createObjectURL(e.target.files[0]));
    setFIleIsValid(true);
    console.log(kitchenImgRef.current.value);
    console.log(fileImage);
  };
  //파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
    // kitchenImgRef("");
  };
//-----------------------폼유효성 검사 및 버튼 비활성화-----------------------------------------------------------
const [isValid, setIsValid] = useState(false);
const[name,setName]= useState("");
const [address, setAddress] = useState("");
const [openTime, setOpenTime] = useState("");
const [closeTime, setCloseTime] = useState("");
const [telphone, setTelephone] = useState("");
const [today, setToday] = useState([]);

const nameChange = (e)=>{
  setName(e.target.value);
}
const addressChange = (e) => {
  setAddress(e.target.value);
};
const oTimeChange = (e) => {
  setOpenTime(e.target.value);
};
const cTimeChange = (e) => {
  setCloseTime(e.target.value);
};
const telphoneChange = (e) =>{
  setTelephone(e.target.value);
}
useEffect(()=>{
if (
  name.trim().length === 0 ||
  address.trim().length === 0 ||
  openTime.trim().length === 0 ||
  closeTime.trim().length === 0 ||
  telphone.trim().length === 0
){
  setIsValid(false);
}
else{
  setIsValid(true);
}
console.log(isValid);
// console.log(name.trim().length);
},[name,address,openTime,closeTime,telphone])
  return (
    <div>
      <Link to={"../location"}>
        <button className={styles.button}>Back</button>
      </Link>
      <form className={styles.form} ref={idRef} onSubmit={submitHandler}>
        <form>
          <form className={styles.pictureForm}>
            {fileIsValid ? (
              <img alt="sample" src={fileImage} className={styles.fileImage} />
            ) : (
              <label htmlFor="file" className={styles.pictureLabel}>
                식당 사진을 추가해주세요.
              </label>
            )}
            <input
              id="file"
              type="file"
              className={styles.picture}
              ref={kitchenImgRef}
              onChange={saveFileImage}
            />
          </form>
          <div className={styles.imageButton}>
            <label htmlFor="file" className={styles.pictureLabel3}>
              식당 사진 추가
            </label>
            <button onClick={deleteFileImage} className={styles.pictureLabel3}>
              삭제
            </button>
          </div>
        </form>
        <input
          onChange={nameChange}
          placeholder="식당 이름"
          className={styles.input}
          ref={nameRef}
        />
        <input
        onChange={telphoneChange}
          placeholder="전화번호"
          className={styles.input}
          ref={telephoneRef}
        />
        <input
          onChange={addressChange}
          placeholder="주소"
          className={styles.input}
          ref={addressRef}
        />
        <span className={styles.time}>
          <input
            onChange={oTimeChange}
            placeholder="영업 시작 시간"
            className={styles.openTime}
            ref={openTimeRef}
          />
          <input
          onChange={cTimeChange}
            placeholder="영업 마감 시간"
            className={styles.closeTime}
            ref={closeTimeRef}
          />
        </span>
        <div>
          <div className={styles.todayTitle}>-오늘의 메뉴-</div>
          <div className={styles.inputForm}>
            <InputBox todayList={todayList} setTodayList={setTodayList} />
            <FoodList
              // title={"-오늘의 메뉴-"}
              todayList={todayList}
              setTodayList={setTodayList}
            />
          </div>
        </div>
        <button disabled={!isValid}className={styles.registerButton}>등록하기</button>
      </form>
    </div>
  );
};

export default KitchenAdd;
