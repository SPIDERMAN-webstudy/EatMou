import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import DangolList from "./DangolList";
const DangolItem = () => {
  const [show, setShow] = useState(false);
  const kitchenData = JSON.parse(localStorage.getItem("Dangol"));
  useEffect(() => {
    if (kitchenData === null) {
      setShow(false);
    } else setShow(true);
  }, [kitchenData]);
  return (
    <React.Fragment>
      {show && (
        <div>
          {kitchenData?.map((item) => (
            <DangolList
              id={item.id}
              key={Math.random()}
              name={item.name}
              openTime={item.openTime}
              closeTime={item.closeTime}
              today={item.today}
            />
          ))}
        </div>
      )}
      {!show && <Card>단골리스트를 추가해주세요~</Card>}
    </React.Fragment>
  );
};
export default DangolItem;
