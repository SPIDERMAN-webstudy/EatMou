import {useState} from "react";

import Card from "../UI/Card";

const LocationKitchenList = (props) => {
    const [isShort, setIsShort] = useState(false);

    if(props.distance<props.Sdistance){
        setIsShort(true);
    }
    
    return (
      <div>
        {isShort ? (
          <Card>
            <img src={props.src} alt="" />
            <div>
              <h3>{props.name}</h3>
              {props.count}
            </div>
            <div>{props.today}</div>
            <div>
              {`${props.openTime}~${props.closeTime}`}
              {props.distance}
            </div>
            <div>
              {props.address}
              {props.telephone}
            </div>
          </Card>
        ) : (
          <div></div>
        )}
      </div>
    );
}

export default LocationKitchenList;