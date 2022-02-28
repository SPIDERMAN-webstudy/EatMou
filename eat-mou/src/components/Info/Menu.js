import React from "react";

import MenuCard from "../UI/MenuCard";

import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      {props.menu?.map((item) => (
        <MenuCard id={item.id} key={Math.random()}>
          {console.log(item)}
          <img
            src={item.menuImg}
            alt={item.menuName}
            className={styles.menuImg}
          />
          <div className={styles.menuName}>{item.menuName}</div>
          <div className={styles.menuPrice}>{item.menuPrice}</div>
        </MenuCard>
      ))}
    </div>
  );
};

export default Menu;
