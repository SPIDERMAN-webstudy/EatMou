import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchKitchenList = (props) => {
  const [show, setshow] = useState(true);
  const DANGOL = "Dangol";
  const navigate = useNavigate();
  let bone = [];
  const t = localStorage.getItem(DANGOL);
  if (t !== null) {
    const parse = JSON.parse(t);
    bone = parse;
  }
  useEffect(() => {
    const t = localStorage.getItem(DANGOL);
    if (t !== null) {
      const parse = JSON.parse(t);
      const CheckBone = parse.filter(function (element) {
        return element.id === props.id;
      });
      if (CheckBone.length !== 0) {
        setshow(false);
      }
    }
  }, []);
  const boneLocalSet = () => {
    localStorage.setItem(DANGOL, JSON.stringify(bone));
    if (bone.length === 0) {
      localStorage.removeItem(DANGOL);
    }
  };
  const infoHandler = () => {
    navigate("/kitchen/:id");
  };
  const boneHandler = () => {
    bone.push(props);
    boneLocalSet();
    setshow(false);
  };
  const boneCancelHandler = (event) => {
    const d = event.target;
    const li = event.target.parentElement;
    const Delbone = bone.filter(function (element, index) {
      return element.id !== props.id;
    });
    bone = Delbone;
    boneLocalSet();
    setshow(true);
  };
  return (
    <React.Fragment>
      <img src={props.img} />
      <div>
        <h3 onClick={infoHandler}>
          {props.name} 거리:{props.distance}
        </h3>
        {show && <span onClick={boneHandler}>🦴 {props.dangol}</span>}
        {!show && (
          <span onClick={boneCancelHandler}>🦴채워짐 {props.dangol + 1}</span>
        )}
        <span>
          {props.today.map((value) => (
            <div key={Math.random()}>{value}</div>
          ))}
        </span>
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
