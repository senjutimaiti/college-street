import React from "react";

const Input = ({ label, type, placeholder }) => {
  return (
    <div >
      <label for={label} className="text-xl fontOswald text-left ">
        {label}
      </label>
      <br />
      <input
        type={type}
        //value={value}
        placeholder={placeholder}
        className={" border-2 border-slate-400 h-16 w-[500px] pl-3 mt-2 mb-5"}
        //id={label}
        //onChange={onChange}
      />
    </div>
  );
};

export default Input;
