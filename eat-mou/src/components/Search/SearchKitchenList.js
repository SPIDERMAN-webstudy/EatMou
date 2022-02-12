import React from "react";
import { useNavigate } from "react-router-dom";
const SearchKitchenList = (props) => {
  const navigate = useNavigate();
  const infoHandler = () => {
    navigate("/kitchen/:id");
  };
  return (
    <React.Fragment>
      <img src={props.img} />
      <div>
        <h3 onClick={infoHandler}>{props.name}</h3>
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
