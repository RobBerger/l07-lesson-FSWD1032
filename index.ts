import { Contact as Person } from './contact';
import { firstName, lastName } from './values';

let newContact = new Person(firstName, lastName);
console.log(newContact.fullName());