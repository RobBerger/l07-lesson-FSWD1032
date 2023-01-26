"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
exports.default = Contact;
