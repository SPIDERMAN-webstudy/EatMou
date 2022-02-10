import { useSelector } from "react-redux";

const Title = (props) => {
  const kitchenData = useSelector((state) => state);
  return (
    <div>
      <span>{kitchenData[0].name}</span>
      <span>🦴</span>
      <span>
        {kitchenData[0].openTime}~{kitchenData[0].closeTime}{" "}
        {kitchenData[0].address}
      </span>
      <span>{kitchenData[0].telephone}</span>
    </div>
  );
};

export default Title;
