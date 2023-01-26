"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Contact {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
exports.Person = Contact;
