import React, { useState } from "react";
import { useSelector } from "react-redux";
const DangolItem = () => {
  const kitchenData = useSelector((state) => state);
  return (
    <React.Fragment>
      {kitchenData.map((item) => (
        <div>
          <div>{item.name}</div>
          <div>
            {item.openTime}~{item.closeTime}
          </div>
          <div>
            {item.today.map((menu) => (
              <div>{menu}</div>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default DangolItem;
