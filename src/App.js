import React from "react";
import { Login, Profile, Jagadish } from "./Components";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <div
        style={{
          width: "1020px",
          height: "100vh",
          backgroundColor: `${theme}`,
          margin: "0 auto",
        }}
      >
        <Profile />
        <Login />
        <Jagadish />
      </div>
    </>
  );
}

export default App;
