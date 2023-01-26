import { Contact as Person } from './contact';
import * as values from './values';

let newContact = new Person(values.firstName, values.lastName);
console.log(newContact.fullName());