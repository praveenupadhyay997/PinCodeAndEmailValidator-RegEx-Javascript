/// UC1 -- Validating six digits in the pin code and then test it using a regular expression
var prompt = require('prompt-sync')();
/// Function to accept the input for the pin code
function PinCodeValidator(pinCode)
{
    /// Define the regular expression for six digits in the pin code
    let PINCODE_REGEX = RegExp('^[0-9]{6}$');
    /// Match the input pincode to the regular expression
    if(PINCODE_REGEX.test(pinCode))
    {
        console.log(pinCode + " is a valid PinCode");
    }
    else
    {
        console.log(pinCode + " is an invalid PinCode");
    }
}
/// Taking the input for the pin code as six digits
let pinCodeEntered = prompt("Enter the pin code with six digits:");
/// Calling the method to validate the pin code
PinCodeValidator(pinCodeEntered);