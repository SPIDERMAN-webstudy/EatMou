import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "동수네 밥상",
    openTime: "11:00",
    closeTime: "22:00",
    distance: 500,
    telephone: "010-6588-9498",
    address: "서울시 광진구 광나루로 17길 52",
    today: ["오징어 볶음", "맛살 튀김", "떡볶이", "순대", "김치 볶음", "닭죽"],
    menu: [
      {
        menuName: "주먹고기",
        menuPrice: 11000,
        memuImg:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151030_43%2F8205052ash_1446179500473jof8y_JPEG%2F%25B8%25B8%25C8%25AD_%25B0%25ED%25B1%25E2_%25282%2529.jpg&type=sc960_832",
      },
      {
        menuName: "차돌 라볶이",
        menuPrice: 5000,
        menuImg: "https://t1.daumcdn.net/cfile/tistory/99AE6A395B1BB3640D",
      },
      {
        menuName: "김치 볶음밥",
        menuPrice: 7000,
        menuImg:
          "https://t1.daumcdn.net/liveboard/dailylife/b5665aeb2a8f46deab4a63f77bc3905a.jpg",
      },
    ],
    id: 123,
    kitchenImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNMTr-fStJ-EMhuy92gjOCNxY5cn_GWPLKw&usqp=CAU",
    dangol: 10,
  },
  {
    name: "미키 식당",
    openTime: "10:00",
    closeTime: "21:00",
    distance: 1300,
    telephone: "02-132-9124",
    address: "서울시 마포구 목동로 142",
    today: ["귀리밥", "닭봉 볶음", "제육 볶음", "숙주나물", "겉절이"],
    menu: [
      {
        menuName: "고등어 한 상",
        menuPrice: 10000,
        memuImg:
          "https://http://storage.enuri.info/pic_upload/knowbox2/202109/10153456920210905eeecfa97-17b5-4e9d-860e-91c1a0ee20d4.JPEGsearch.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151030_43%2F8205052ash_1446179500473jof8y_JPEG%2F%25B8%25B8%25C8%25AD_%25B0%25ED%25B1%25E2_%25282%2529.jpg&type=sc960_832",
      },
      {
        menuName: "삽겹살",
        menuPrice: 13000,
        menuImg:
          "https://mblogthumb-phinf.pstatic.net/MjAyMTA2MDFfMTYz/MDAxNjIyNTM1NDc1OTQ3.D2wO9xNJY7kAk-okzm7vUxjnNxfU0NMWMTt81sypByog.zVm4T2xMfC6SsMx7cAz5rkLS1S8QM2uLs8JVnGJV4iIg.JPEG.zephyr122059/20210601_125306.jpg?type=w800",
      },
      {
        menuName: "청국장 정식",
        menuPrice: 8000,
        menuImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmcx2Wf0o3HzChewGTMESSlhH67vF4SPSjg&usqp=CAU",
      },
      {
        menuName: "미키 정식",
        menuPrice: 9000,
        menuImg:
          "https://picpen.chosun.com/data/2016/12/13/3/picimg-c1775925-45ba-4c03-806c-4fe6b7e4ef02.jpg",
      },
    ],
    id: 124,
    kitchenImg:
      "https://search.pstatic.net/common/?autoRotate=true&quality=100&type=f640_380&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200311_258%2F1583901589496pIEgY_JPEG%2Fgc8TyGTllfuvQFwlMiPYKJZe.jpeg.jpg",
    dangol: 218,
  },
];

// let kitchenInfo = {
//   name: "",
//   openTime: "",
//   closeTime: "",
//   distance: 0,
//   telephone: "",
//   address: "",
//   today: [],
//   menu: [{ menuName: "", menuPrice: 0 }],
// };

const kitchenSlice = createSlice({
  name: "kitchen",
  initialState,
  reducers: {
    clear(state) {
      state = [];
    },
    addKitchen(state, action) {
      //   kitchenInfo = {
      //     name: action.payload.name,
      //     openTime: action.payload.openTime,
      //     closeTiem: action.payload.closeTime,
      //     telephone: action.payload.telephone,
      //     address: action.payload.address,
      //     today: action.payload.today,
      //     menu: action.payload.menu,
      //   };

      // kitchenInfo = action.payload;
      state.push(action.payload);
    },
    deleteKitchen(state, action) {
      state.filter((kitchen) => kitchen !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: kitchenSlice.reducer,
});
export const kitchenActions = kitchenSlice.actions;
export default store;
