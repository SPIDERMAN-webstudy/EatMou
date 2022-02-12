import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";
const DangolItem = () => {
  const navigate = useNavigate();
  const kitchenData = useSelector((state) => state);
  const infoHandler = () => {
    navigate("/kitchen/:id");
  };
  return (
    <React.Fragment>
      {kitchenData.map((item) => (
        <Card id={item.id} key={Math.random()}>
          <div onClick={infoHandler}>{item.name}</div>
          <div>
            {item.openTime}~{item.closeTime}
          </div>
          <div>
            {item.today.map((menu) => (
              <div key={Math.random()}>{menu}</div>
            ))}
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
};
export default DangolItem;
