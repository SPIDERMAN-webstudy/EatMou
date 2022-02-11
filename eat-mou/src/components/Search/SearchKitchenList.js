import React from "react";
const SearchKitchenList = (props) => {
  return (
    <React.Fragment>
      {/* <div>{props.img}</div> */}
      {console.log("hi")}
      <div>
        <h3>{props.name}</h3>
        <span>🦴 {props.dangol}</span>
        <p>
          {props.today.map((value) => (
            <div>{value}</div>
          ))}
        </p>
        <span>
          {props.openTime}~{props.closeTime}
        </span>
        <span>{props.address}</span>
        <span>{props.telephone}</span>
      </div>
    </React.Fragment>
  );
};
export default SearchKitchenList;
