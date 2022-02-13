import { useSelector } from "react-redux";

import MenuCard from "../UI/MenuCard";
import styles from "./Menu.module.css";

const Menu = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0].menu;
  return (
    <div>
      {dong.map((item) => (
        <MenuCard key={item.id}>
          <img src={item.menuImg} className={styles.menuImg} />
          <div className={styles.menuName}>{item.menuName}</div>
          <div className={styles.menuPrice}>{item.menuPrice}</div>
        </MenuCard>
      ))}
    </div>
  );
};

export default Menu;
