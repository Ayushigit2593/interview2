import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    categoryData: [],
    detailData: {},
    category: "",
    page: "",
  },
  reducers: {
    setCategoryData(state, action) {
      state.categoryData = action.payload;
    },
    setDetailData(state, action) {
      state.detailData = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload?.type;
      state.page = action.payload?.page;
    },
  },
});

export const dataSliceAction = dataSlice.actions;
export default dataSlice;
