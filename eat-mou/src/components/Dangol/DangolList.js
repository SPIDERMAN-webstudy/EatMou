import { useNavigate } from "react-router-dom";

import styles from "./DangolList.module.css";
import Card from "../UI/Card";

const DangolList = (props) => {
  const navigate = useNavigate();
  const infoHandler = () => {
    navigate(`/kitchen/${props.id}`, { state: props.name });
  };

  return (
    <Card>
      <span id={props.id} key={Math.random()}>
        <div className={styles.name} onClick={infoHandler}>
          {props.name}
        </div>
        <div>
          {props.openTime}~{props.closeTime}
        </div>
        <div>
          {props.today?.map((menu) => (
            <div id={props.id} key={Math.random()}>
              {menu}
            </div>
          ))}
        </div>
      </span>
    </Card>
  );
};

export default DangolList;
