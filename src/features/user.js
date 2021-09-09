import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  //name of the state
  name: "user",
  //initial state
  //we'd always have this value property that which contains the initial values
  initialState: { value: initialStateValue },
  //the functions we're gonna use to alter the state
  reducers: {
    //let's have a login function
    //state is the current and previous values of our state
    //it's basically the state man
    //action contains payload and type
    //payload is used the change the values of the state (it's an object)
    //!!!!! so when we log in, we want to grab the state, and change it with...
    //whatever we get from the payload
    login: (state, action) => {
      state.value = action.payload;
    },
    //return the state into its original ways
    logout: (state, action) => {
      //we don/t actually need the "action" in this particular case, we can delete it if we wanted to
      state.value = initialStateValue;
    },
  },
});

//let's export our actions so that we can use them in other components
export const { login, logout } = userSlice.actions;

//don't forget to import your reducer in this file in index.js (which contains your store)

export default userSlice.reducer;
