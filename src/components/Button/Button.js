import React from "react";

export default function Button(props) {
  const { className, onClick, name, ...rest } = props;

  return (
    <button className={className} onClick={onClick} {...rest}>
      {name}
    </button>
  );
}
