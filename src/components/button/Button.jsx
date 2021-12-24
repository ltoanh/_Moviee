import React from 'react';
import './button.scss';

function Button(props) {
  const {onClick} = props;
  return (
    <button onClick={onClick || null} className={`btn btn-primary ${props.className}`}>
      {props.children}
    </button>
  )
}

export const OutlineButton = (props) => {
  const {onClick} = props;

  return(
    <button onClick={onClick || null} className={`btn btn-outline ${props.className}`}>
      {props.children}
    </button>
  )
};

export default Button;

