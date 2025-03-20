import { createSlice } from "@reduxjs/toolkit";
import { User } from "./Type";

//Redux ユーザー状態を処理するSlice


//初期状態は未登録（null）にする
const initialState: User | null = null

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (_, action) => {
            return action.payload;
        },
        logout: () => {
            return null;
        },
    },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;