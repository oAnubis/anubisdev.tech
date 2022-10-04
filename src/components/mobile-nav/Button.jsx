import React from 'react';

const Button = ({ children }) => {
    function handleOnClick() {
        
    }
  return (
    <button onClick={handleOnClick}>{ children }</button>
  )
}

export default Button;