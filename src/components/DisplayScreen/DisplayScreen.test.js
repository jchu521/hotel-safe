import { mount } from "enzyme";

import DisplayScreen from "./DisplayScreen";

import { findByTestAttr, setup } from "../../utils/index";

//test DisplayScreen component
test("renders DisplayScreen component without error", () => {
  const wrapper = setup(mount, DisplayScreen, true);
  const PanelComponent = findByTestAttr(wrapper, "component-displayScreen");

  expect(PanelComponent.length).toBe(1);
});
