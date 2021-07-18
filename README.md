# Hotel Safe App

## Requirements

An explanation of the application is below:

The application is a basic representation of a hotel safe where you input a PIN, the safe locks with the stored PIN and you open it again by inputting the correct PIN. The rules are as follows:

- PIN should be 4 digits
- PIN should show each digit in display on key press with a limit of 4
- Enter button should store the PIN code IF the safe is not currently locked
- If the safe is locked on enter, show an error message (eg. INVALID) in the display window
- If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light
- If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display
- Currently open safe should display a green light, locked should display a red light
- CLR should clear the current display

Use css, sass or styled components as you see fit to make the app look similar to the included image.
Use https://github.com/facebook/create-react-app as a framework to build the app. Keep in mind that we use React with Redux. It’s a pure frontend application so you don’t need to do any service calls etc.

Bonus points for enzyme or jest unit tests.

## Assumption

- Every time when the user want to update the pin need to enter new 4 digits pin, then press the enter btn, to save and change it. If no pin enter and then press enter btn, will lock the safe, with the same password. If enter less than 4 digits will display "Please enter 4 digits" message.

## How to install and start

1. npm install
2. run the program `npm start`
3. run the unit tests `npm test`

## If I had more time

- Change to TS
- Add sotrybook for fun
