import { shallow } from "enzyme";

import Button from "./Button";
import { findByTestAttr, setup } from "../../utils/index";

//check button component
test("renders Button component without error", () => {
  const wrapper = setup(shallow, Button);
  const buttonComponent = findByTestAttr(wrapper, "component-button");

  expect(buttonComponent.length).toBe(1);
});

test("Button component props", () => {
  const mockCallBack = jest.fn();

  const wrapper = setup(shallow, Button, false, {
    onClick: mockCallBack,
    className: "test",
    name: "test",
    test: true,
  });
  const buttonComponent = findByTestAttr(wrapper, "component-button");

  //check class name
  expect(buttonComponent.hasClass("test")).toBe(true);
  //test click
  buttonComponent.simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(1);
  //check button name
  expect(buttonComponent.text()).toEqual("test");
  //test can passing rest props
  expect(buttonComponent.prop("test")).toBe(true);
});
