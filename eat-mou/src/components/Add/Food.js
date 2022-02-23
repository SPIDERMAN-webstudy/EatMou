import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./Food.module.css";

const Food = ({today, todayList, setTodayList}) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(today.text);

  const editInputRef = useRef(null)

  //------------------------------edit 모드 일때 포커싱---------------------------------------------
  useEffect(()=>{
    if(edited){
      editInputRef.current.focus();
    }
  }, [edited]);
//----------------------------------------------------------------------------------------------
  const onClickEdit = () =>{
    setEdited(true);
  }
  const onChangeEditInput= (event)=>{
    setNewText(event.target.value);
  }
//---------------------수정된 아이템 id와 같은 것을 찾아 다시 넣어줌-------------------------------
  const onClickSubmitButton = () =>{
    const newTodayList = todayList.map((todayFood)=>(
      {
        ...todayFood,
        text: todayFood.id === today.id ? newText : todayFood.text,
      }
    ));
    setTodayList(newTodayList);

    setEdited(false);
  }
  //----------------------------------delete 기능 구현---------------------------------------------------------------
  const onClickDeleteButton = ()=>{
    if(window.confirm('정말로 지우실건가요?')){
      const nextTodayList = todayList.map((item)=>({
        ...item,
        deleted: item.id === today.id ? true : item.deleted,
      }));
      setTodayList(nextTodayList);
    }
  }
  
  return (
    <div className={styles.list}>
      {edited ? (
        <input
          type="text"
          value={newText}
          ref={editInputRef}
          onChange={onChangeEditInput}
        />
      ) : (
        <span className={styles.today}>{today.text}</span>
      )}
      <div className={styles.button}>
        {edited ? (
          <button
            className={styles.OkButton}
            type="button"
            onClick={onClickSubmitButton}
          >
            확인
          </button>
        ) : (
          <button
            className={styles.OkButton}
            type="button"
            onClick={onClickEdit}
          >
            수정
          </button>
        )}
        <button
          className={styles.deleteButton}
          type="button"
          onClick={onClickDeleteButton}
        >
          삭제
        </button>
      </div>
    </div>
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
