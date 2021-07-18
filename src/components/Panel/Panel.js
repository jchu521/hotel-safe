import React from "react";
import { useDispatch } from "react-redux";
import {
  enterPin,
  savePin,
  clearPin,
} from "../../store/features/safe/safeSlice";
import Button from "../Button/Button";

import { keypad } from "../../constants/index";

import "./Panel.scss";

export default function Panel() {
  const dispatch = useDispatch();

  const handleClick = (e, value) => {
    e.preventDefault();

    //clear pin
    if (value === "CLR") {
      dispatch(clearPin());
    } else if (value === "=>") {
      dispatch(savePin());
    } else {
      dispatch(enterPin(value));
    }
  };

  return (
    <div className="Panel" data-test="component-panel">
      <div className="Panel__buttonGroup" data-test="panel-buttonGroup">
        {keypad.map((b, i) => (
          <Button
            className="Panel__button"
            key={i}
            onClick={(e) => handleClick(e, b.key)}
            name={b.key}
          />
        ))}
      </div>
    </div>
  );
}
