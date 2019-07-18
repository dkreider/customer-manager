import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Invoice } from 'src/app/models/invoice';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  subscription: Subscription;

  displayedColumns: string[] = ['service', 'value', 'created', 'due'];
  invoices = new MatTableDataSource();

  customerForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    notes: new FormControl('')
  });

  constructor(
    private customerService: CustomerService,
    public addInvoiceDialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.customerService.getCustomer().subscribe(customer => {
      this.customerForm.patchValue(customer);
      this.invoices = new MatTableDataSource(customer.invoices);
    });
  }

  saveCustomer(): void {
    if (!this.customerForm.value._id) {
      this.customerForm.value._id = Math.floor((Math.random() * 10000) + 1);
    }
    this.customerService.saveCustomer(this.customerForm.value);
    this.customerService.requestCustomer(this.customerForm.value._id);
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
    this.invoices = new MatTableDataSource();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openAddInvoiceDialog(): void {
    const dialogRef = this.addInvoiceDialog.open(AddInvoiceDialog, {width: '50%', data: new Invoice});

    dialogRef.afterClosed().subscribe(invoice => {
      if (invoice) {
        invoice.created = new Date();
        this.customerService.addInvoice(this.customerForm.value, invoice);
        this.customerService.requestCustomer(this.customerForm.value._id);
      }
    });
  }

}

@Component({
  selector: 'add-invoice',
  templateUrl: 'add-invoice.html'
})

export class AddInvoiceDialog {
  constructor(public dialogRef: MatDialogRef<AddInvoiceDialog>,
    @Inject(MAT_DIALOG_DATA) public invoice: Invoice) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}