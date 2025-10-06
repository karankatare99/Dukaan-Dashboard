import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id?: string;
  name?: string;
  email?: string;
  token?: string;
}

const userInitialState: UserState = {};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    }
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;