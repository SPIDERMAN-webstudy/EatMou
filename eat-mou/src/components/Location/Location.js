import { useState } from "react";

const location = (props) => {
  const selectDistanceList = [100, 300, 500, 600];
  const dummyData = ["은혜식당", "미키식당", "백반기사집"];
  const [distance, setDistance] = useState("1000");
  const selectDistance = (event) => {
    setDistance(event.target.value);
  };

  return (
    <div>
      <h2>서울시 광진구 광나루토 17길 52</h2>
      <select onChange={selectDistance}>
        <option value="100">100</option>
        <option value="300">300</option>
        <option value="500">500</option>
      </select>
    </div>
  );
};
