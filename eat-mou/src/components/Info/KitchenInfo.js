import styles from "./KitchenInfo.module.css";

import Title from "./Title";
import Today from "./Today";
import Menu from "./Menu";

const KitchenInfo = (props) => {
  return (
    <div>
      <img
        src={
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MTFfMjM5%2FMDAxNTYyODA2MjM3MDM2.-awFRxBsyL1bOAiNZ6j-tvOIAFXNjx0_QMSi4sNKU9sg.EAY4uNaXz_A7R6Ov4SpCIsOYuaLxSBQG0zzL72zVcQYg.JPEG.den10kr%2F%25B4%25EB%25C0%25FC_%25B0%25A5%25C4%25A1%25C1%25B6%25B8%25B2_%25281%2529.jpg&type=sc960_832"
        }
      />
      <Title />
      <div className={styles.line}></div>
      <Today />
      <div className={styles.line}></div>
      <Menu />
    </div>
  );
};

export default KitchenInfo;
