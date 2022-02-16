import styles from "./KitchenInfo.module.css";
import { Link, useNavigate } from "react-router-dom";

import Title from "./Title";
import Today from "./Today";
import Menu from "./Menu";
import { useSelector } from "react-redux";

const KitchenInfo = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];
  const navigate = useNavigate();

  const gobackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={styles.info}>
      <img src={dong.kitchenImg} className={styles.img} />
      <div className={styles.back} onClick={gobackHandler}>
        back
      </div>
      <div className={styles.bg}>
        <Title />
        <hr className={styles.line}></hr>
        <Today />
        <hr className={styles.line}></hr>
        <Menu />
      </div>
    </div>
  );
};

export default KitchenInfo;
