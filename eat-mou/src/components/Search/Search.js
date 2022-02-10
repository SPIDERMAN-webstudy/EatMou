import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchKitchenList from "./SearchKitchenList";
const Search = () => {
  const kitchenDate = useSelector((state) => state);
  const [sortedKitchen, setSortedKitchen] = useState(kitchenDate);
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
    setSortedKitchen(temp);
    setKitchenInput("");
  };
  console.log(sortedKitchen);
  const inputHandler = (event) => {
    setKitchenInput(event.target.value);
  };
  return (
    <React.Fragment>
      <button>back</button>
      <form onSubmit={submitHandler}>
        <input value={kitchenInput} onChange={inputHandler} />
        <button type="submit">검색</button>
      </form>
      <p>내가 아는 식당이 나오지 않는다면?</p>
      <br />
      <div>
        <button>거리순</button>
        <button>단골순</button>
      </div>
      {sortedKitchen.map((item) => (
        <SearchKitchenList
          key={id}
          openTime={item.openTime}
          closeTime={item.closeTime}
          name={item.name}
          dangol={item.distance}
          address={item.address}
          telephone={item.telephone}
          today={item.today}
        />
      ))}
    </React.Fragment>
  );
};
export default Search;
