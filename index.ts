// import Contact, { zip } from './contact';
// import * as values from './values';
// import NumberUtilities from './numberExample';

// let newContact = new Contact(values.firstName, values.lastName);
// console.log(newContact.fullName());
// console.log(zip);

// let result: string = NumberUtilities.isOddOrEven(51);
// console.log(result);

import validator from 'validator';

let email = "test@test.com";
let notEmail = "test.com";

if (validator.isEmail(email)) {
    console.log("email is valid")
} else {
    console.log("email is not valid")
}

if (validator.isEmail(notEmail)) {
    console.log("notEmail is valid")
} else {
    console.log("notEmail is not valid")
}