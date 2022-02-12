import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";
const DangolItem = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const kitchenData = JSON.parse(localStorage.getItem("Dangol"));
  useEffect(() => {
    if (kitchenData === null) {
      setShow(false);
    } else setShow(true);
  }, [kitchenData]);
  const infoHandler = () => {
    navigate("/kitchen/:id");
  };
  return (
    <React.Fragment>
      {show && (
        <Card>
          {kitchenData.map((item) => (
            <div id={item.id} key={Math.random()}>
              <div onClick={infoHandler}>{item.name}</div>
              <div>
                {item.openTime}~{item.closeTime}
              </div>
              <div>
                {item.today.map((menu) => (
                  <div key={Math.random()}>{menu}</div>
                ))}
              </div>
            </div>
          ))}
        </Card>
      )}
      {!show && <Card>단골리스트를 추가해주세요~</Card>}
    </React.Fragment>
  );
};
export default DangolItem;
