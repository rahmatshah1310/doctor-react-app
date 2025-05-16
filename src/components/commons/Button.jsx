import React from "react";

const AntdButton = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default AntdButton;
