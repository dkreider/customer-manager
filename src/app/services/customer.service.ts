import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Customers } from "../customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Customer[] {
    return Customers;
  }

}
