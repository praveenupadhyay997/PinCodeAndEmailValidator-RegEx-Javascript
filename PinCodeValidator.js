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
        case 3: PINCODE_REGEX = RegExp('^(?![a-zA-Z)[0-9](?![a-zA-Z])){6}$'); break;
        case 4: PINCODE_REGEX = RegExp('^[0-9]{3}[ ]?[0-9]{3}$'); break;
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
        /// Returning false in case you want to validate data entry somewhere
        return false;
    }
}
/// Function to accept the input for the email Id
function EmailIDValidator(emailID, choice)
{
    /// Variable holding the regular expression for the email ID
    let EMAILID_REGEX;
    /// Define the regular expression for email Id based on the use case
    switch (choice)
    {
        case 1: EMAILID_REGEX = RegExp('^[0-9A-Za-z]$'); break;
        case 2: EMAILID_REGEX = RegExp('^[0-9A-Za-z]+([+-_.](![@])[a-zA-Z]+)*$'); break;
        case 3: EMAILID_REGEX = RegExp('^[0-9A-Za-z]+([+-_.][a-zA-Z]+)*[@][0-9A-Za-z]+$'); break;
        default: console.log('Invalid choice'); break;
    }
    /// Testing for the emailID to be valid or not
    if(EMAILID_REGEX.test(emailID))
    {
        console.log(emailID + " is a valid email-ID for UC-"+choice);
        return true;
    }
    else
    {
        console.log(emailID + " is an invalid email-ID for UC-"+choice);
        /// Returning false in case you want to validate data entry somewhere
        return false;
    }
}
/// Taking the input for the pin code as six digits
let pinCodeEntered = prompt("Enter the pin code to be validated :");
/// UC1 --> Calling the method to validate the pin code for only six characters in pinCode
PinCodeValidator(pinCodeEntered, 1);
/// UC2 --> Calling the method to validate the pin code for only six digits in pinCode
PinCodeValidator(pinCodeEntered, 2);
/// UC3 --> Calling the method to validate the pin code for six digits and have no character in begining or end
PinCodeValidator(pinCodeEntered,3);
/// UC4 --> Calling the method to validate the pin code for space between three digits in pinCode
PinCodeValidator(pinCodeEntered,4);
/// Taking the input for the pin code as six digits
let emailIdEntered = prompt("Enter the email Id to be validated :");
/// UC5 --> Calling the method to validate the emailId's first part i.e. abc in abc.xyz@bridgelabz.co.in
EmailIDValidator(emailIdEntered, 1);
/// UC6 --> Calling the method to validate the emailId's second part i.e. abc.xyz in abc.xyz@bridgelabz.co.in
EmailIDValidator(emailIdEntered, 2);
/// UC7 --> Calling the method to validate the emailId's third part i.e. abc.xyz@bridgelabz in abc.xyz@bridgelabz.co.in
EmailIDValidator(emailIdEntered, 3);
