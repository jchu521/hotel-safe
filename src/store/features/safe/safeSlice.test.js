import safeSliceReduer, { enterPin, clearPin, savePin } from "./safeSlice";

//test reducer safeSlice
const initPreviousState = {
  maxPinLength: 4,
  pin: "",
  enterPin: "",
  isLocked: false,
  displayMessage: "",
};

test("safeSlice should return the initial state", () => {
  expect(safeSliceReduer(undefined, {})).toEqual({
    maxPinLength: 4,
    pin: "",
    enterPin: "",
    isLocked: false,
    displayMessage: "",
  });
});

test("should handle save enter pin and display message", () => {
  expect(safeSliceReduer(initPreviousState, enterPin("1"))).toEqual({
    maxPinLength: 4,
    pin: "",
    enterPin: "1",
    isLocked: false,
    displayMessage: "1",
  });
});

test("should show each digit in display on key press with a limit of 4", () => {
  expect(
    safeSliceReduer(
      { ...initPreviousState, enterPin: "1234", displayMessage: "1234" },
      enterPin("9")
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "",
    enterPin: "1234",
    isLocked: false,
    displayMessage: "1234",
  });
});

test("CLR should clear the current display and Entered PIN", () => {
  expect(
    safeSliceReduer(
      { ...initPreviousState, enterPin: "123", displayMessage: "123" },
      clearPin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "",
    enterPin: "",
    isLocked: false,
    displayMessage: "",
  });
});

test("not enter pin and pressd save btn, should show 'Please enter 4 digits' message", () => {
  expect(safeSliceReduer(initPreviousState, savePin())).toEqual({
    maxPinLength: 4,
    pin: "",
    enterPin: "",
    isLocked: false,
    displayMessage: "Please enter 4 digits",
  });
});

test("entered 4 digits pin and pressed save btn, should saved pins and locked", () => {
  expect(
    safeSliceReduer(
      { ...initPreviousState, enterPin: "1234", displayMessage: "1234" },
      savePin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "1234",
    enterPin: "",
    isLocked: true,
    displayMessage: "",
  });
});

test("If the safe is locked on enter, show an error message (eg. INVALID) in the display window ", () => {
  //no enter
  expect(
    safeSliceReduer(
      { ...initPreviousState, pin: "1234", isLocked: true },
      savePin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "1234",
    enterPin: "",
    isLocked: true,
    displayMessage: "INVALID",
  });

  //enter wrong 4 digits
  expect(
    safeSliceReduer(
      { ...initPreviousState, pin: "1234", enterPin: "7777", isLocked: true },
      savePin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "1234",
    enterPin: "",
    isLocked: true,
    displayMessage: "INVALID",
  });

  //enter some digits
  expect(
    safeSliceReduer(
      { ...initPreviousState, pin: "1234", enterPin: "123", isLocked: true },
      savePin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "1234",
    enterPin: "",
    isLocked: true,
    displayMessage: "INVALID",
  });
});

test("If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display", () => {
  expect(
    safeSliceReduer(
      { ...initPreviousState, pin: "1234", isLocked: true, enterPin: "1234" },
      savePin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "1234",
    enterPin: "",
    isLocked: false,
    displayMessage: "",
  });
});

test("If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light", () => {
  //Update pin
  expect(
    safeSliceReduer(
      {
        ...initPreviousState,
        pin: "1234",
        enterPin: "5555",
        displayMessage: "5555",
      },
      savePin()
    )
  ).toEqual({
    maxPinLength: 4,
    pin: "5555",
    enterPin: "",
    isLocked: true,
    displayMessage: "",
  });
});
