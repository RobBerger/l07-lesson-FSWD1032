import Contact, { zip } from './contact';
import * as values from './values';
import NumberUtilities from './numberExample';

let newContact = new Contact(values.firstName, values.lastName);
console.log(newContact.fullName());
console.log(zip);

let result: string = NumberUtilities.isOddOrEven(51);
console.log(result);