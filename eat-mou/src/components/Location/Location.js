import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import LocationKitchenList from "./LocationKitchenList";


const location = (props) => {
  const kitchen = useSelector((state)=>state);

    const [distance, setDistance] = useState(1000);

    const selectDistance = (event)=>{
        setDistance(event.target.value);
    };

    return (
      <div>
        <h3>Back</h3>
        <h4>서울시 광진구 광나루토 17길 52</h4>
        <select onChange={selectDistance}>
          <option value="100">100</option>
          <option value="300">300</option>
          <option value="500">500</option>
        </select>
        {kitchen.map(() => (
            <LocationKitchenList 
            setDistance={distance} 
            name={kitchen.name} 
            openTime={kitchen.openTime} 
            closeTime={kitchen.closeTime} 
            telephone={kitchen.telephone} 
            distance={kitchen.distance}
            address={kitchen.address} 
            dangolCount={kitchen.dangolCount} 
            today={kitchen.today} 
            menu={kitchen.menu}/>
        ))}
      </div>
    );
}