import { useSelector, useDispatch } from "react-redux";
import { kitchenActions } from "./store/index";
import { useEffect } from "react";
import DangolItem from "./components/Dangol/DangolItem";
const DUMMY_kitchen = {
  name: "동수네 밥상",
  openTime: "11:00",
  closeTime: "22:00",
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kitchenActions.addKitchen(DUMMY_kitchen));
  }, []);

  const kitchenData = useSelector((state) => state);

  return (
    <div>
      <img src={require("./components/UI/logo.png")} />
      <form>
        <input placeholder="식당을 검색하세요" />
        <button>검색</button>
      </form>
      <button>주변 식당 찾기</button>
      {console.log(kitchenData)}
      <DangolItem />
    </div>
  );
}

export default App;
