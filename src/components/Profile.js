import React from "react";
//to grab the values of our states, we need to use useSelector
import { useSelector } from "react-redux";

const Profile = () => {
  //let's grab all the states
  //and this user variable here to turn into state.user.value, which is its value
  const user = useSelector((state) => state.user.value);
  //now I can access the values below
  return (
    <div>
      <h1>Profile page</h1>
      <p>name:{user.name} </p>
      <p>age:{user.age} </p>
      <p>email:{user.email} </p>
    </div>
  );
};

export default Profile;
