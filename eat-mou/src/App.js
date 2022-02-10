import { useSelector, useDispatch } from "react-redux";
import { kitchenActions } from "./store/index";

import { useEffect, useState } from "react";

import styles from "./App.module.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";

import DangolItem from "./components/Dangol/DangolItem";

const DUMMY_kitchen = {
  name: "동수네 밥상",
  openTime: "11:00",
  closeTime: "22:00",
  distance: 500,
  telephone: "010-6588-9498",
  address: "서울시 광진구 광나루로  17길 52",
  today: ["오징어 볶음", "맛살 튀김", "떡볶이", "순대", "김치 볶음", "닭죽"],
  menu: [
    { menuName: "왕돈까스", menuPrice: 10000 },
    { menuName: "차돌 라볶이", menuPrice: 5000 },
    { menuName: "김치 볶음밥", menuPrice: 7000 },
  ],
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
