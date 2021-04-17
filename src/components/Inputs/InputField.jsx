import React from "react";
import "./Inputs-Styles.scss";
export default function InputField({
  type,
  name,
  placeHolder,
  handleChange,
  refProp,
}) {
  return (
    <input
      type={type}
      className="form-control spaceOut"
      name={name}
      placeholder={placeHolder}
      onChange={handleChange}
      ref={refProp}
    />
  );
}
