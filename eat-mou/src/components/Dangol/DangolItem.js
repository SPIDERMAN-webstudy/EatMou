import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
const DangolItem = () => {
  const kitchenData = useSelector((state) => state);
  return (
    <React.Fragment>
      {kitchenData.map((item) => (
        <Card>
          <div>{item.name}</div>
          <div>
            {item.openTime}~{item.closeTime}
          </div>
          <div>
            {item.today.map((menu) => (
              <div>{menu}</div>
            ))}
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
};
export default DangolItem;
