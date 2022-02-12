import { useSelector } from "react-redux";

import MenuCard from "../UI/MenuCard";
import styles from "./Menu.module.css";

const Menu = (props) => {
  const kitchenData = useSelector((state) => state);
  const dong = kitchenData[0].menu;
  return (
    <div>
      {dong.map((item) => (
        <MenuCard>
          <img
            src={
              "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMjhfMTI5%2FMDAxNTQ1OTczMTEyNzc5.eO8lPFH71cD81XqMPCY_t9iipxqZmrrSzmg5ZhCCOZEg.ko6Y1HzE46ckkfVTKR8EXmOoGlHvExSYhH8ToHgEkUcg.JPEG.ket8880212%2F%25B8%25DE%25B4%25BA%25C6%25C7.jpg"
            }
            className={styles.foodpic}
          />
          <div className={styles.menuName}>{item.menuName}</div>
          <div className={styles.menuPrice}>{item.menuPrice}</div>
        </MenuCard>
      ))}
    </div>
  );
};

export default Menu;
