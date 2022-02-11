import { useSelector, useDispatch } from "react-redux";
import { kitchenActions } from "../store/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import styles from "./App.module.css";
// import Card from "./components/UI/Card";
import Button from "./UI/Button";
import Input from "./UI/Input";

import DangolItem from "./Dangol/DangolItem";

const DUMMY_kitchen = {
  name: "동수네 밥상",
  openTime: "11:00",
  closeTime: "22:00",
  distance: 500,
  telephone: "010-6588-9498",
  address: "서울시 광진구 광나루로  17길 52",
  today: ["오징어 볶음", "맛살 튀김", "떡볶이", "순대", "김치 볶음", "닭죽"],
  menu: [
    {
      menuName: "주먹고기",
      menuPrice: 11000,
      memuImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151030_43%2F8205052ash_1446179500473jof8y_JPEG%2F%25B8%25B8%25C8%25AD_%25B0%25ED%25B1%25E2_%25282%2529.jpg&type=sc960_832",
    },
    {
      menuName: "차돌 라볶이",
      menuPrice: 5000,
      menuImg: "https://t1.daumcdn.net/cfile/tistory/99AE6A395B1BB3640D",
    },
    {
      menuName: "김치 볶음밥",
      menuPrice: 7000,
      menuImg:
        "https://t1.daumcdn.net/liveboard/dailylife/b5665aeb2a8f46deab4a63f77bc3905a.jpg",
    },
  ],
  id: 123,
  kitchenImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNMTr-fStJ-EMhuy92gjOCNxY5cn_GWPLKw&usqp=CAU",
  dangol: 10,
};
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(kitchenActions.addKitchen(DUMMY_kitchen));
    setIsLoaded(true);
  }, []);

  const kitchenData = useSelector((state) => state);

  return (
    <div className={styles.layout}>
      <img className={styles.logo} src={require("./components/UI/logo.png")} />
      <form className={styles.form}>
        <Input placeholder="식당 이름 검색하기" />
        {/* <Button>검색</Button> */}
      </form>
      <Button className={styles.locationBtn}>주변 식당 찾기</Button>
      {console.log(kitchenData)}
      {console.log(isLoaded)}
      {isLoaded && <DangolItem />}
    </div>
  );
}

export default App;
