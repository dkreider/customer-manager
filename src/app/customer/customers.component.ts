import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phoneNumber'];
  dataSource = new MatTableDataSource();
  devicesLoaded = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
   this.getCustomers();
  }

  getCustomers(): void {
    this.dataSource = new MatTableDataSource(this.customerService.getCustomers());
    this.dataSource.paginator = this.paginator;
  }

}
