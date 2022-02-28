import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import KitchenEditTtakgari from "./KitchenEditTtakgari";

import Button from "../UI/Button";
import styles from "./KitchenEdit.module.css";

const KitchenEdit = () => {
  const [loading, setLoading] = useState(true);
  const [kitchenDate, setKitchenDate] = useState([]);
  const location = useLocation();

  const nameRef = useRef("");
  const telephoneRef = useRef("");
  const addressRef = useRef("");
  const openTimeRef = useRef("");
  const closeTimeRef = useRef("");

  const [name, setName] = useState("");
  const [telphone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  const fetchKitchenHandler = useCallback(async () => {
    const response = await fetch(
      "https://react-http-184dd-default-rtdb.asia-southeast1.firebasedatabase.app/kitchen.json"
    );
    const data = await response.json();
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
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchKitchenHandler();
  }, [fetchKitchenHandler]);

  let dong = kitchenDate.filter((val) => {
    if (val.id === location.state) {
      return val;
    }
  });

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

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <KitchenEditTtakgari
          id={dong[0].id}
          key={Math.random()}
          name={dong[0].name}
          telephone={dong[0].telephone}
          address={dong[0].address}
          openTime={dong[0].openTime}
          closeTime={dong[0].closeTime}
          today={dong[0].today}
          menu={dong[0].menu}
        />
      )}
    </div>
  );
};

export default KitchenEdit;
