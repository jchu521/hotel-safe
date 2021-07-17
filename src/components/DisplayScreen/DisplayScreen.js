import React from "react";
import { useSelector } from "react-redux";

import "./DisplayScreen.scss";

export default function DisplayScreen() {
  const safe = useSelector((state) => state.safe);
  const { isLocked, displayMessage } = safe;

  return (
    <div className="DisplayScreen">
      <div className="DisplayScreen__row">
        <div className="DisplayScreen__screen">{displayMessage}</div>
      </div>
      <div className="DisplayScreen__row">
        <div
          className={`DisplayScreen__light ${isLocked ? "red" : "green"}`}
        ></div>
      </div>
    </div>
  );
}
