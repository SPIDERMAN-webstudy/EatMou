import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Location.module.css";
import LocationKitchenList from "./LocationKitchenList";

const Location = (props) => {
  const [kitchen, setKitchen] = useState([]);

  const [distance, setDistance] = useState(100);

  //------------------------firebase로부터 데이터 GET해오기---------------------------------------
  const fetchKitchenHandler = useCallback(async () => {
    const response = await fetch(
      "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json"
    );
    const data = await response.json();
    console.log(data);
    const loadedKitchen = [];
    for (const key in data) {
      loadedKitchen.push({
        id: data[key].id,
        address: data[key].address,
        name: data[key].name,
        menu: data[key].menu,
        closeTime: data[key].closeTime,
        openTime: data[key].openTime,
        telephone: data[key].telephone,
        kitchenImg: data[key].kitchenImg,
        dangol: data[key].dangol,
        distance: data[key].distance,
        today: data[key].today,
      });
    }
    setKitchen(loadedKitchen);
  }, []);
  useEffect(() => {
    fetchKitchenHandler();
  }, [fetchKitchenHandler]);
  //----------------------------firebase에 포스트 하기-------------------------------------------
  // const navigate = useNavigate();

  // async function addKitchenHandler(kitchen) {
  //   const response = await fetch(
  //     "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(kitchen),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  // const onClickHandler = () => {
  //   navigate("../KitchenAdd", { state: addKitchenHandler() });
  // };
  //-------------------------------Link를 통해 props값 넘기기-----------------------------------
  // navigate("../KitchenAdd", { state: addKitchenHandler() });

  //-------------------select에서 선택한 거리 설정----------------------------------------------
  const selectDistance = (event) => {
    setDistance(event.target.value);
  };
  //------------------------------------------------------------------------------------------

  return (
    <div>
      <Link to={"../"}>
        <button className={styles.button}>Back</button>
      </Link>
      <div className={styles.address}>서울시 광진구 광나루토 17길 52</div>
      <select className={styles.select} onChange={selectDistance}>
        <option value="100">100m 이내</option>
        <option value="500">500m 이내</option>
        <option value="1000">1000m 이내</option>
        <option value="1500">1500m 이내</option>
      </select>
      {console.log(kitchen)}
      {kitchen.map((item) => (
        <LocationKitchenList
          name={item.name}
          openTime={item.openTime}
          closeTime={item.closeTime}
          telephone={item.telephone}
          distance={item.distance}
          selectDistance={distance}
          address={item.address}
          dangol={item.dangol}
          today={item.today}
          menu={item.menu}
          src={item.kitchenImg}
        />
      ))}
      <Link to={"../KitchenAdd"} className={styles.text}>
        내가 아는 식당이 나오지 않는다면?
      </Link>
    </div>
  );
};

export default Location;
