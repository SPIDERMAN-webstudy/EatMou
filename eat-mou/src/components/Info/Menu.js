import { useSelector } from "react-redux";

import MenuCard from "../UI/MenuCard";

const Menu = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0].menu;
  return (
    <div>
      {dong.map((item) => (
        <MenuCard>
          <li>
            {item.menuName} {item.menuPrice}
          </li>
        </MenuCard>
      ))}
    </div>
  );
};

export default Menu;
