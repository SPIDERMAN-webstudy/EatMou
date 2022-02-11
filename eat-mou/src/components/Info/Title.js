import { useSelector } from "react-redux";

const Title = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];
  return (
    <div>
      <span>{dong.name}</span>
      <span>🦴</span>
      <span>
        {dong.openTime}~{dong.closeTime} {dong.address}
      </span>
      <span>{dong.telephone}</span>
    </div>
  );
};

export default Title;
