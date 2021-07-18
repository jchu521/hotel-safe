import { shallow } from "enzyme";

import App from "./App";

import { findByTestAttr, setup } from "./utils/index";

//test app
test("renders App component without error", () => {
  const wrapper = setup(shallow, App);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
