import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phoneNumber'];
  dataSource = new MatTableDataSource();
  devicesLoaded = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
   this.getCustomers();
  }

  getCustomers(): void {
    this.dataSource = new MatTableDataSource(this.customerService.getCustomers());
  }

}