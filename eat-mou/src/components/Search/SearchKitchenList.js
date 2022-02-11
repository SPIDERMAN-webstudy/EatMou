import React from "react";
const SearchKitchenList = (props) => {
  return (
    <React.Fragment>
      <div>{props.img}</div>
      <div>
        <h3>{props.name}</h3>
        <span>🦴 {props.dangol}</span>
        <span>
          {props.today.map((value) => (
            <div>{value}</div>
          ))}
        </span>
        <span>
          {props.openTime}~{props.closeTime}
        </span>
        <span>{props.address}</span>
        <span>{props.telephone}</span>
        <h6>{props.distance}</h6>
      </div>
    </React.Fragment>
  );
};
export default SearchKitchenList;
