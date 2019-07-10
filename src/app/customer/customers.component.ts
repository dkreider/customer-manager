import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phoneNumber'];
  dataSource = new MatTableDataSource();
  devicesLoaded = false;
  subscription: Subscription;

  @ViewChild (MatPaginator, null) paginator: MatPaginator;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
   this.getCustomers();
  }

  getCustomers(): void {
    this.subscription = this.customerService.getCustomers().subscribe(customers => {
      this.dataSource = new MatTableDataSource(customers);
      this.dataSource.paginator = this.paginator;
    });
    this.customerService.requestCustomers();
  }

  loadCustomer(customerId: String): void {
    this.customerService.requestCustomer(customerId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
