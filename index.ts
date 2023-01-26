import { Contact } from './contact';
import { firstName, lastName } from './values';

let newContact = new Contact(firstName, lastName);
console.log(newContact.fullName());