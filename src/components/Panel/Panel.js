import React from "react";

import "./Panel.scss";

const buttonGroup = [
  {
    label: 1,
    onClick: () => {},
  },
  {
    label: 2,
    onClick: () => {},
  },
  {
    label: 3,
    onClick: () => {},
  },
  {
    label: 4,
    onClick: () => {},
  },
  {
    label: 5,
    onClick: () => {},
  },
  {
    label: 6,
    onClick: () => {},
  },
  {
    label: 7,
    onClick: () => {},
  },
  {
    label: 8,
    onClick: () => {},
  },
  {
    label: 9,
    onClick: () => {},
  },
  {
    label: "CLR",
    onClick: () => {},
  },
  {
    label: 0,
    onClick: () => {},
  },
  {
    label: "=>",
    onClick: () => {},
  },
];

export default function Panel(props) {
  return (
    <div className="Panel">
      <div className="Panel__buttonGroup">
        {buttonGroup.map((b, i) => (
          <button className="Panel__button" key={i} onClick={b.onClick}>
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
