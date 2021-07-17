import { createSlice } from "@reduxjs/toolkit";

export const safeSlice = createSlice({
  name: "safe",
  initialState: {
    maxPinLength: 4, //PIN equal to 4 digits
    pin: "",
    enterPin: "",
    isLocked: false,
    displayMessage: "",
  },
  reducers: {
    enterPin: (state, action) => {
      //PIN should show each digit in display on key press with a limit of 4
      if (state.enterPin.length < state.maxPinLength) {
        state.enterPin += action.payload;
        state.displayMessage = state.enterPin;
      }
    },
    clearPin: (state) => {
      state.displayMessage = "";
      state.enterPin = "";
    },
    savePin: (state) => {
      if (state.isLocked) {
        //open
        if (state.enterPin === state.pin) {
          state.isLocked = false;
          state.displayMessage = "";
        } else {
          state.displayMessage = "INVALID";
        }
      } else {
        //no password enter
        if (state.enterPin.Length === 0) {
          //if not press any password then check
          if (state.pin.length !== 0) {
            // if has password remain the same and locked
            state.isLocked = true;
          }
        } else if (state.enterPin.length === state.maxPinLength) {
          //save or update password when enter 4 digital and press enter
          state.pin = state.enterPin;
          state.isLocked = true;
          state.displayMessage = "";
        } else {
          //if password less than 4, clear message and enter pin value
          state.displayMessage = "Please enter 4 digits";
        }
      }
      state.enterPin = "";
    },
  },
});

export const { enterPin, clearPin, savePin } = safeSlice.actions;

export default safeSlice.reducer;
