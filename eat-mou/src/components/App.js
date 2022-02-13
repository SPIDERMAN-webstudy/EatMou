import { useSelector, useDispatch } from "react-redux";

import { kitchenActions } from "../store/index";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo } from "react";
import useHttp from "../hooks/use-http";

import { ReactComponent as Logo } from "./UI/logo.svg";
import { GoSearch } from "react-icons/go";

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
      memuImg: "https://t1.daumcdn.net/cfile/tistory/2105074554B61C8821",
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
  const { isLoading, error, sendRequest: fetchHttp } = useHttp();
  // const [isLoaded, setIsLoaded] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const kitchenData = useSelector((state) => state);

  const navigate = useNavigate();

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log(input);
    navigate("/search", { state: input });
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const firebasePostHandler = async (kitchenInfo) => {
    const applyData = (data) => {
      console.log(data);
      dispatch(
        kitchenActions.addKitchen({
          DBid: data.name,
          name: kitchenInfo.name,
          id: kitchenInfo.id,
        })
      ); //자동으로 부여된 ID redux store에 저장
    };
    fetchHttp(
      {
        url: "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json",
        method: "POST",
        body: {
          name: "동수네 밥상",
          openTime: "11:00",
          closeTime: "22:00",
          distance: 500,
          telephone: "010-6588-9498",
          address: "서울시 광진구 광나루로 17길 52",
          today: [
            "오징어 볶음",
            "맛살 튀김",
            "떡볶이",
            "순대",
            "김치 볶음",
            "닭죽",
          ],
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
              menuImg:
                "https://t1.daumcdn.net/cfile/tistory/99AE6A395B1BB3640D",
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
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      applyData
    );
  };

  const firebaseGetHandler = async () => {
    const applyData = (data) => {
      console.log(data);
    };
    fetchHttp(
      {
        url: "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json",
      },
      applyData
    );
  };

  return (
    <div className={styles.layout}>
      {/* <img className={styles.logo} src="./UI/logo.svg" alt="Eat-Mou Logo" /> */}
      <Logo className={styles.logo} width="25%" />
      <Button onClick={firebasePostHandler}>firebase POST</Button>
      <Button onClick={firebaseGetHandler}>firebase GET</Button>
      <form className={styles.form} onSubmit={searchSubmitHandler}>
        <Input
          placeholder="식당 이름 검색하기"
          onChange={inputChangeHandler}
          value={input}
        />
        <Button className={styles.searchBtn} type="submit">
          <GoSearch />
        </Button>
      </form>
      <Link to={`/location`}>
        <Button className={styles.locationBtn}>주변 식당 찾기</Button>
      </Link>
      {console.log(kitchenData)}
      <DangolItem />
    </div>
  );
}

export default App;
