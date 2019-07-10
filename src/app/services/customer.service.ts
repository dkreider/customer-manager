import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Customers } from "../customers";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private subject = new Subject<Customer>();

  constructor() { }

  public getCustomers(): Array<Customer> {
    return Customers;
  }

  public requestCustomer(customerId: String) {
    let customer = Customers.find(cust => {
      return cust._id == customerId;
    })
    this.subject.next(customer);
  }

  public getCustomer() {
    return this.subject.asObservable();
  }

}
