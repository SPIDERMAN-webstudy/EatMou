import React, {useState} from 'react';

import LocationKitchenList from "./LocationKitchenList";


const location = (props) => {
  const DUMMY_kitchen = [{
    name= "동수네 밥상",
    dangolCount = 0,
    openTime= "11:00",
    closeTime= "22:00",
    distance= 500,
    telephone= "010-6588-9498",
    address= "서울시 광진구 광나루로  17길 52",
    today= ["오징어 볶음", "맛살 튀김", "떡볶이", "순대", "김치 볶음", "닭죽"],
    menu= [
      { menuName= "왕돈까스", menuPrice= 10000 },
      { menuName= "차돌 라볶이", menuPrice= 5000 },
      { menuName= "김치 볶음밥", menuPrice= 7000 },
    ],
},
  {
    name= "미키 식당",
    dangolCount = 0,
    openTime= "11:00",
    closeTime= "22:00",
    distance= 700,
    telephone= "010-4078-8569",
    address= "서울시 강서구 양천로  26길 26",
    today= ["오징어 볶음", "맛살 튀김", "떡볶이", "순대", "김치 볶음", "닭죽"],
    menu= [
      { menuName= "왕돈까스", menuPrice= 10000 },
      { menuName= "차돌 라볶이", menuPrice= 5000 },
      { menuName= "김치 볶음밥", menuPrice= 7000 },
    ],
}];
    const [distance, setDistance] = useState(1000);
    const [count, setCount] = useState(0);
    const selectDistance = (event)=>{
        setDistance(event.target.value);
    };

    const countHandler = () =>{
        setCount((cur)=>cur+1);
    }


    return (
      <div>
        <h3>Back</h3>
        <h4>서울시 광진구 광나루토 17길 52</h4>
        <select onChange={selectDistance}>
          <option value="100">100</option>
          <option value="300">300</option>
          <option value="500">500</option>
        </select>
        {DUMMY_kitchen.map((kitchen) => (
            <LocationKitchenList 
                name = {kitchen.name}
                openTime = {kitchen.openTime}
                closeTime = {kitchen.closeTime}
                distance = {kitchen.distance}
                telephone = {kitchen.telephone}
                address = {kitchen.address}
                today = {kitchen.today}
                menu = {kitchen.menu}
                Sdistance = {distance}
                count = {countHandler}
            />
        ))}
      </div>
    );
}