import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const InputBox = ({ todayList, setTodayList }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickHandler = () => {
    const nextFood = todayList.concat({
      id: todayList.length,
      text,
    });
    setTodayList(nextFood);

    setText("");
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(todayList);
  }, [todayList]);

  return (
    <div>
      <input
        type="text"
        value={text}
        ref={inputRef}
        placeholder="오늘의 반찬을 입력해주세요"
        onChange={onChangeInput}
      />
      <button type="submit" onClick={onClickHandler}>
        추가
      </button>
    </div>
  );
};

InputBox.propTypes = {
  todayList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodayList: PropTypes.func.isRequired,
};

export default InputBox;
