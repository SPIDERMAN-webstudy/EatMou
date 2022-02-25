import { useNavigate } from "react-router-dom";

import styles from "./DangolList.module.css";
import Card from "../UI/Card";

const DangolList = (props) => {
  const navigate = useNavigate();
  const infoHandler = () => {
    navigate(`/kitchen/${props.id}`, { state: props.id });
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
          {props.today !== undefined && (
            <div>
              {console.log(props.today[0].text)}
              {props.today[0].text === undefined ? (
                <span>
                  {props.today?.map((value) => (
                    <span key={Math.random()}>{value}/</span>
                  ))}
                </span>
              ) : (
                <span>
                  {props.today?.map((value) => (
                    <span key={Math.random()}>{value.text}/</span>
                  ))}
                </span>
              )}
            </div>
          )}
        </div>
      </span>
    </Card>
  );
};

export default DangolList;
