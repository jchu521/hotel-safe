import { shallow } from "enzyme";

import Safe from "./Safe";
import { findByTestAttr, setup } from "../../utils/index";

//test container safe
test("renders Safe component without error", () => {
  const wrapper = setup(shallow, Safe);
  const SafeComponent = findByTestAttr(wrapper, "component-safe");
  expect(SafeComponent.length).toBe(1);
});
