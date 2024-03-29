import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Customers } from "../customers";
import { Subject } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerSubject = new Subject<Customer>();
  private customersSubject = new Subject<Array<Customer>>();

  constructor() { }

  public requestCustomers() {
    this.customersSubject.next(Customers);
  }

  public getCustomers() {
    return this.customersSubject.asObservable();
  }

  public requestCustomer(customerId: String) {
    let customer = Customers.find(cust => {
      return cust._id == customerId;
    })
    this.customerSubject.next(customer);
  }

  public getCustomer() {
    return this.customerSubject.asObservable();
  }

  public deleteCustomer(customerId: String): void {
    let customerIndex = Customers.findIndex(cust => {
      return cust._id == customerId;
    });
    Customers.splice(customerIndex, 1);
  }

  public saveCustomer(customer: Customer): void {
    let index = Customers.findIndex(cust => {
      return cust._id == customer._id;
    });
    if (index != -1) {
      Customers[index] = customer;
    } else {
      Customers.unshift(customer);
    }
  }

  public addInvoice(customer: Customer, invoice: Invoice): void {
    let updatedCustomer = Customers.find(cust => {
      return cust._id == customer._id;
    });
    updatedCustomer.invoices.unshift(invoice);
  }

}
