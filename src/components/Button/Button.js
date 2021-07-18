import React from "react";

export default function Button(props) {
  const { className, onClick, name, ...rest } = props;

  return (
    <button
      data-test="component-button"
      className={className}
      onClick={onClick}
      {...rest}
    >
      {name}
    </button>
  );
}
