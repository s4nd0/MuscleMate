import React from "react";

// styles
import "./InputField.css";

const InputField = ({
  type,
  placeholder,
  text,
  value,
  setValue,
  handleLogic,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogic();
  };

  return (
    <form onSubmit={handleSubmit} className="input-field">
      <label>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button>{text}</button>
    </form>
  );
};

export default InputField;
