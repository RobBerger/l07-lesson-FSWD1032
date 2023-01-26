"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./contact");
const values_1 = require("./values");
let newContact = new contact_1.Contact(values_1.firstName, values_1.lastName);
console.log(newContact.fullName());
