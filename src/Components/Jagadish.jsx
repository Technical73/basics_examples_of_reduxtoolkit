import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangerTheme } from "../features/theme";

const Jagadish = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleRemove = () => {
    setColor("");
  };
  return (
    <>
      <h2>Change the theme of the out website</h2>
      <input
        type="text"
        placeholder="Enter the color Name"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={() => dispatch(ChangerTheme(color))}>
        Change the Theme
      </button>
      <button onClick={handleRemove}>Remove the input field</button>
    </>
  );
};

export default Jagadish;
