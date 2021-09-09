import React from "react";
//useDispatch hook is used to MODIFY values over states
//while useSelector hook is used to ACCESS values over states
import { useDispatch } from "react-redux";
//import login action from user so that I can use this in dispatch
import { login } from "../features/user";

//this is the component where we want to ALTER the state

const Login = () => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default Login;
