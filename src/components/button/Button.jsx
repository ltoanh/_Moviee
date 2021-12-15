import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <button className={`btn btn-primary ${props.className}`}>
      {props.children}
    </button>
  )
}

export const OutlineButton = (props) => {
  return(
    <button className={`btn btn-outline ${props.className}`}>
      {props.children}
    </button>
  )
};

export default Button;

