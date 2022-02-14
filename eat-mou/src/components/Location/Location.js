import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

import styles from "./Location.module.css"
import LocationKitchenList from "./LocationKitchenList";

const Location = (props) => {
  const kitchen = useSelector((state) => state);

  const [distance, setDistance] = useState(100);

  const selectDistance = (event) => {
    setDistance(event.target.value);
  };

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
