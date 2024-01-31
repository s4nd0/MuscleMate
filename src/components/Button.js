import React from "react";

const Button = ({ onClick, text, addClass, disabled }) => {
  return (
    <div className="dark-bg">
      {!disabled && (
        <button onClick={onClick} className={`btn ${addClass}`}>
          {text}
        </button>
      )}
      {disabled && (
        <button disabled onClick={onClick} className={`btn ${addClass}`}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
