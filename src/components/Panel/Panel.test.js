import { mount } from "enzyme";

import Panel from "./Panel";
import { findByTestAttr, setup } from "../../utils/index";

//test Panel component
test("renders Panel component without error", () => {
  const wrapper = setup(mount, Panel, true);
  const PanelComponent = findByTestAttr(wrapper, "component-panel");

  expect(PanelComponent.length).toBe(1);
});

test("renders Panel component keypad should exist", () => {
  const wrapper = setup(mount, Panel, true);
  const panelComponent = findByTestAttr(wrapper, "panel-buttonGroup");
  //check has 12 btns
  expect(panelComponent.children().length).toBe(12);

  //check button all has correct class name
  panelComponent.children().forEach((node) => {
    expect(node.hasClass("Panel__button")).toBe(true);
  });
});
