import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Customers } from "../customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public getCustomers(): Array<Customer> {
    return Customers;
  }

}
