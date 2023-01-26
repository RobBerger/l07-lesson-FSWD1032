"use strict";
// import Contact, { zip } from './contact';
// import * as values from './values';
// import NumberUtilities from './numberExample';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let newContact = new Contact(values.firstName, values.lastName);
// console.log(newContact.fullName());
// console.log(zip);
// let result: string = NumberUtilities.isOddOrEven(51);
// console.log(result);
const validator_1 = __importDefault(require("validator"));
let email = "test@test.com";
let notEmail = "test.com";
if (validator_1.default.isEmail(email)) {
    console.log("email is valid");
}
else {
    console.log("email is not valid");
}
if (validator_1.default.isEmail(notEmail)) {
    console.log("notEmail is valid");
}
else {
    console.log("notEmail is not valid");
}
