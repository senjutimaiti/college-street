import React from "react";

const Input = ({ label }) => {
  return (
    <div>
      <label for={label} className="text-2xl fontOswald text-left">
        {label}
      </label>
      <br />
      <input
        type={type}
        //value={value}
        placeholder={placeholder}
        //className={" border-2 border-black h-16 w-[500px] pl-10"}
        //id={label}
        //onChange={onChange}
      />
    </div>
  );
};

export default Input;
