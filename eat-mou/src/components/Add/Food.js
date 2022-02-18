import React from "react";
import PropTypes from "prop-types";

const Food = ({today, todayList, setTodayList}) => {
  console.log(today.text);
  return (
    <li>
      <span>{today.text}</span>
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </li>
  );
};

Food.propTypes = {
  today: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todayList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodayList: PropTypes.func.isRequired,
};


export default Food;
