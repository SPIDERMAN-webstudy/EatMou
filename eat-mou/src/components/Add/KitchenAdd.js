import { Link } from "react-router-dom";

import styles from "./KitchenAdd.module.css"

const KitchenAdd = () => {
  return (
    <div>
      <Link to={"../location"}>
        <button className={styles.button}>Back</button>
      </Link>
      <form className={styles.form}>
        <div className={styles.picture}>식당 사진을 추가해 주세요</div>
        <input placeholder="식당 이름" className={styles.input} />
        <input placeholder="전화번호" className={styles.input} />
        <input placeholder="주소" className={styles.input} />
        <span className={styles.time}>
          <input placeholder="영업 시작 시간" className={styles.openTime} />
          <input placeholder="영업 마감 시간" className={styles.closeTime} />
        </span>
        <button className={styles.registerButton}>등록하기</button>
      </form>
    </div>
  );
};

export default KitchenAdd;
