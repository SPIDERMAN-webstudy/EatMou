import React, { useCallback, useEffect, useState } from "react";

import styles from "./KitchenInfo.module.css";

import Title from "./Title";
import Today from "./Today";
import Menu from "./Menu";
import { useLocation, useNavigate } from "react-router-dom";

const KitchenInfo = () => {
  const [kitchenDate, setKitchenDate] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  const fetchKitchenHandler = useCallback(async () => {
    const response = await fetch(
      "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json"
    );
    const data = await response.json();
    console.log(data);
    const loadedKitchen = [];
    for (const key in data) {
      loadedKitchen.push({
        id: key,
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
    setKitchenDate(loadedKitchen);
  }, []);

  useEffect(() => {
    fetchKitchenHandler();
  }, [fetchKitchenHandler]);

  let dong = kitchenDate.filter((val) => {
    if (val.id === location.state) {
      return val;
    }
  });

  const gobackHandler = () => {
    navigate(-1);
  };

  const editHandler = () => {
    navigate("edit", { state: location.state });
  };

  return (
    <div className={styles.media}>
      <span className={styles.back} onClick={gobackHandler}>
        back
      </span>
      <span className={styles.edit} onClick={editHandler}>
        edit
      </span>
      <div className={styles.info}>
        {dong.map((item) => (
          <div key={Math.random()}>
            <img src={item.kitchenImg} className={styles.img} alt={item.name} />
            <Title
              id={item.id}
              key={Math.random()}
              openTime={item.openTime}
              closeTime={item.closeTime}
              name={item.name}
              dangol={item.dangol}
              address={item.address}
              telephone={item.telephone}
              today={item.today}
            />
            <hr className={styles.line}></hr>
            <Today key={Math.random()} today={item.today} />
            <hr className={styles.line}></hr>
            <Menu key={Math.random()} menu={item.menu} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default KitchenInfo;
