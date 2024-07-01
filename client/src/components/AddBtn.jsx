// import React from "react";
import "../components/InputForm.css";

export const AddBtn = (props) => {
  const { handleClick } = props;
  return <button className="addBtn" onClick={handleClick}>send</button>;
};
