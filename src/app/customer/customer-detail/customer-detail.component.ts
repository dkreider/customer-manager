import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerForm = new FormGroup({
    _id: new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
