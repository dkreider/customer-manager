import { Invoice } from './invoice';

export class Customer {
    _id: String;
    name: String;
    email: String;
    phoneNumber: String;
    notes: String;
    invoices: Array<Invoice>
}