import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


//redux storeを設定する ユーザーの状態を管理する
export const store = configureStore({
    reducer: {
        user: userReducer
    }
});
//useDispatchの型を定義する
export type AppDispatch = typeof store.dispatch;
//storeが持っているstateの型を定義する(store.getStateの戻り値の型を取得する)
export type RootState = ReturnType<typeof store.getState>;