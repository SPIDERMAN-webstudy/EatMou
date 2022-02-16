import MenuCard from "../UI/MenuCard";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div>
      {props.menu.map((item) => (
        <MenuCard id={item.id} key={item.id}>
          <img src={item.menuImg} className={styles.menuImg} />
          <div className={styles.menuName}>{item.menuName}</div>
          <div className={styles.menuPrice}>{item.menuPrice}</div>
        </MenuCard>
      ))}
    </div>
  );
};

export default Menu;
