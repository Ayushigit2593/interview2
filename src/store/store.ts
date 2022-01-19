import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataslice";
const store = configureStore({ reducer: { storedata: dataSlice.reducer } });
export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
