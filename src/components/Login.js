import React from "react";
//useDispatch hook is used to MODIFY values over states
//while useSelector hook is used to ACCESS values over states
import { useDispatch } from "react-redux";
//import login action from user so that I can use this in dispatch
import { login, logout, initialStateValue } from "../features/user";
//initialstatevalue is mine

//this is the component where we want to ALTER the state

const Login = () => {
  const dispatch = useDispatch();
  console.log(dispatch(login));
  //this is to get the initial state value
  console.log(initialStateValue);
  return (
    <div>
      <button
        onClick={() => {
          //o halde, websocket uygulamasında bu dispatch sanırım useEffect'in içine girmeli
          dispatch(
            login({
              name: "Murat",
              age: 29,
              email: "yougomate@gmail.com",
            })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          //see the logout doesn't take a payload so it's empty
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Login;
