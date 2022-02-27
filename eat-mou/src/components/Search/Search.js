import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import SearchKitchenList from "./SearchKitchenList";
import styles from "./Search.module.css";
import { GoSearch } from "react-icons/go";
const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [kitchenDate, setKitchenDate] = useState([]);
  const [sortedKitchen, setSortedKitchen] = useState(kitchenDate);
  const [method, setMethod] = useState(true);
  let temp = {};
  const id = "th";
  const [kitchenInput, setKitchenInput] = useState("");
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
        dangol: data[key].dangol === undefined ? 0 : data[key].dangol,
        distance: data[key].distance === undefined ? 0 : data[key].distance,
        today: data[key].today,
      });
    }
    setKitchenDate(loadedKitchen);
  }, []);
  useEffect(() => {
    fetchKitchenHandler();
  }, [fetchKitchenHandler]);
  useEffect(() => {
    const firstInput = location.state;
    console.log(firstInput);
    temp = kitchenDate.filter((val) => {
      if (firstInput == "") {
        return val;
      } else if (val.name.includes(firstInput)) {
        return val;
      }
    });
    console.log(kitchenDate);
    setSortedKitchen(temp);
  }, [kitchenDate]);
  const submitHandler = (event) => {
    event.preventDefault();
    temp = kitchenDate.filter((val) => {
      if (kitchenInput === "") {
        return val;
      } else if (val.name.includes(kitchenInput)) {
        return val;
      }
    });
    if (method) {
      temp = temp.sort((a, b) => a.distance - b.distance);
    } else {
      temp = temp.sort((a, b) => b.dangol - a.dangol);
    }
    setSortedKitchen(temp);
    setKitchenInput("");
  };
  const inputHandler = (event) => {
    setKitchenInput(event.target.value);
  };
  const distanceButtonHandler = () => {
    temp = sortedKitchen.sort((a, b) => a.distance - b.distance);
    console.log(temp);
    setSortedKitchen(temp);
    setMethod(true);
  };
  const dangolButtonHandler = () => {
    setMethod(false);
    temp = sortedKitchen.sort((a, b) => b.dangol - a.dangol);
    setSortedKitchen(temp);
  };
  const backHandler = () => {
    navigate("/", { state: kitchenInput });
  };
  const addHandler = () => {
    navigate("/Kitchenadd", { state: kitchenInput });
  };
  return (
    <div className={styles.body}>
      <header className={styles.layout}>
        <button className={styles.back} onClick={backHandler}>
          Back
        </button>
        <form className={styles.Search} onSubmit={submitHandler}>
          <Input
            placeholder="식당 이름 검색하기"
            value={kitchenInput}
            onChange={inputHandler}
          />
          <Button className={styles.searchBtn} type="submit">
            <GoSearch />
          </Button>
        </form>

        <button className={styles.add} onClick={addHandler}>
          내가 아는 식당이 나오지 않는다면?
        </button>
        <div className={styles.select}>
          <button
            className={`${method ? styles.color : ""}`}
            onClick={distanceButtonHandler}
          >
            거리순
          </button>
          <button
            className={`${!method ? styles.color : ""}`}
            onClick={dangolButtonHandler}
          >
            단골순
          </button>
        </div>
      </header>
      <main>
        {sortedKitchen?.map((item) => (
          <SearchKitchenList
            img={item.kitchenImg}
            id={item.id}
            key={Math.random()}
            openTime={item.openTime}
            closeTime={item.closeTime}
            name={item.name}
            dangol={item.dangol}
            distance={item.distance}
            address={item.address}
            telephone={item.telephone}
            today={item.today}
          />
        ))}
      </main>
    </div>
  );
};
export default Search;
