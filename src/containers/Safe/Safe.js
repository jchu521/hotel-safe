import React from "react";

import Panel from "../../components/Panel/Panel";
import DisplayScreen from "../../components/DisplayScreen/DisplayScreen";

import "./Safe.scss";

export default function Safe() {
  return (
    <div className="Safe" data-test='component-safe'>
      <Panel />
      <DisplayScreen />
    </div>
  );
}
