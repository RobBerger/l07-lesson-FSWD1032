import Contact from './contact';
import * as values from './values';

let newContact = new Contact(values.firstName, values.lastName);
console.log(newContact.fullName());