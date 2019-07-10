import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  subscription: Subscription;

  customerForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    notes: new FormControl('')
  });

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.subscription = this.customerService.getCustomer().subscribe(customer => {
      this.customerForm.patchValue(customer);
    });
  }

  saveCustomer(): void {
    this.customerService.saveCustomer(this.customerForm.value);
    this.customerService.requestCustomers();
  }

  deleteCustomer(): void {
    if (confirm("Are you sure?")) {
      this.customerService.deleteCustomer(this.customerForm.value._id);
      this.customerService.requestCustomers();
      this.clearForm();
    }
  }

  clearForm(): void {
    this.customerForm.reset();
  }

}
