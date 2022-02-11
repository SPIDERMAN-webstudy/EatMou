import { useSelector } from "react-redux";

const Today = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0];
  return (
    <div>
      <span>오늘의 메뉴</span>
      <ul>
        {dong.today.map((menu) => (
          <li>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default Today;
