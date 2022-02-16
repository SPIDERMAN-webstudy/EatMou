import React, { useRef, useState } from "react";

const InputBox = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickHandler = () => {
    setText("");
    inputRef.current.focus();
  };

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

export default InputBox;
