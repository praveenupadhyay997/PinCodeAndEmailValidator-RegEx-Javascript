/// UC1 -- Validating six digits in the pin code and then test it using a regular expression
var prompt = require('prompt-sync')();
/// Function to accept the input for the pin code
function PinCodeValidator(pinCode, choice)
{
    /// Variable holding the regular expression for the pin code
    let PINCODE_REGEX;
    /// Define the regular expression for six digits in the pin code
    switch (choice)
    {
        case 1: PINCODE_REGEX = RegExp('^[A-Za-z0-9]{6}$'); break;
        case 2: PINCODE_REGEX = RegExp('^[0-9]{6}$'); break;
        default: console.log('Invalid choice'); break;
    }
    /// Testing for the pin code to be valid or not
    if(PINCODE_REGEX.test(pinCode))
    {
        console.log(pinCode + " is a valid PinCode for UC-"+choice);
        return true;
    }
    else
    {
        console.log(pinCode + " is an invalid PinCode for UC-"+choice);
        return false;
    }
}
/// Taking the input for the pin code as six digits
let pinCodeEntered = prompt("Enter the pin code with six digits:");
/// UC1 --> Calling the method to validate the pin code for only six characters in pinCode
PinCodeValidator(pinCodeEntered, 1);
/// UC2 --> Calling the method to validate the pin code for only six digits in pinCode
PinCodeValidator(pinCodeEntered, 2);