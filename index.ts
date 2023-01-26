import Contact, { zip } from './contact';
import * as values from './values';
import NumberUtilities from './numberExample';

let newContact = new Contact(values.firstName, values.lastName);
console.log(newContact.fullName());
console.log(zip);