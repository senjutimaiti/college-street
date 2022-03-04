import React from 'react'

const Button = ({ text, className }) => {
  return (
    <div>
        <button
        className={ className }
        //onClick={onClick}
        >
        {text}
        </button>
    </div>
  )
}

export default Button