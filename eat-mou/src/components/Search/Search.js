import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import SearchKitchenList from "./SearchKitchenList";
const Search = () => {
  const kitchenDate = useSelector((state) => state);
  const [sortedKitchen, setSortedKitchen] = useState(kitchenDate);
  const [method, setMethod] = useState(true);
  let temp = {};
  const id = "th";
  const [kitchenInput, setKitchenInput] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    temp = kitchenDate.filter((val) => {
      if (kitchenInput == "") {
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
    console.log(temp);
    setSortedKitchen(temp);
    setKitchenInput("");
  };
  const inputHandler = (event) => {
    setKitchenInput(event.target.value);
  };
  const distanceButtonHandler = () => {
    temp = sortedKitchen.sort((a, b) => a.distance - b.distance);
    setSortedKitchen(temp);
    setMethod(true);
  };
  const dangolButtonHandler = () => {
    setMethod(false);
    temp = sortedKitchen.sort((a, b) => b.dangol - a.dangol);
    setSortedKitchen(temp);
  };
  return (
    <React.Fragment>
      <button>back</button>
      {/*라우터로 back연결 홈으로 */}
      <form onSubmit={submitHandler}>
        <Input
          placeholder="식당 이름 검색하기"
          value={kitchenInput}
          onChange={inputHandler}
        />
        <Button type="submit">검색</Button>
      </form>
      <p>내가 아는 식당이 나오지 않는다면?</p> {/* 라우터로 add로 연결*/}
      <br />
      <div>
        <button onClick={distanceButtonHandler}>거리순</button>
        <button onClick={dangolButtonHandler}>단골순</button>
      </div>
      <div>
        {console.log(sortedKitchen)}
        {sortedKitchen.map((item) => (
          <SearchKitchenList
            img={item.kitchenImg}
            id={Math.random()}
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
      </div>
    </React.Fragment>
  );
};
export default Search;
