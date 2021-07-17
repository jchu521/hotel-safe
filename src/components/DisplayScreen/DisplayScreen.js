import React from "react";

import "./DisplayScreen.scss";

export default function DisplayScreen() {
  return (
    <div className="DisplayScreen">
      <div className="DisplayScreen__row">
        <div className="DisplayScreen__screen"></div>
      </div>

      <div className="DisplayScreen__row">
        <div className="DisplayScreen__light"></div>
      </div>
    </div>
  );
}
