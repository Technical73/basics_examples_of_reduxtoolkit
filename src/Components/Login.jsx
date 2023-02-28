import React from "react";
import { useDispatch } from "react-redux";
import { Sketch, Logout } from "../features/User";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(
              Sketch({
                name: "Jagadish",
                age: 22,
                email: "JagadishWaranvr345@gmail.com",
              })
            );
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            dispatch(Logout());
          }}
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default Login;
