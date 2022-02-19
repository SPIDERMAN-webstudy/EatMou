import React from "react";
import Food from "./Food";
import PropTypes from "prop-types";

const FoodList = ({ title, todayList, setTodayList }) => {
  console.log(todayList);
  return (
    <div>
      <div>{title}</div>
      <ul>
        {todayList &&
          todayList.map((today) => (
            <Food
              key={today.id}
              today={today}
              todayList={todayList}
              setTodayList={setTodayList}
            />
          ))}
      </ul>
    </div>
  );
};
FoodList.prototype = {
  title: PropTypes.string.isRequired,
  todayList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodayList: PropTypes.func.isRequired,
};

export default FoodList;
