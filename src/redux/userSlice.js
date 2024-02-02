import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo"))??{},
  cvDetails: JSON.parse(localStorage.getItem(`cvDetails`))??{},
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("userInfo");
      localStorage?.removeItem("cvDetails");
    },
    updateCvDetails: (state, action)=>{
      const { payload } = action;
      state.cvDetails = payload;
    }
  },
});

export default userSlice.reducer;
export const { updateCvDetails } = userSlice.actions;

export function Login(user) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.login({user}));
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout());
  };
}
