import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  
  invoiceForm = this.fb.group({
      shipper: ['', Validators.required],
      consignee: [''],
      deliveryTo: [''],
      billTo: [''],
      entryType: [''],
      importerAddress: this.fb.group({
        name: [''],
        street: [''],
        street2: [''],
        city: [''],
        state: [''],
        zip: [''],
        telNo: [''],
        email: [''],
      }),
      deliveryAddress: this.fb.group({
        name: [''],
        street: [''],
        street2: [''],
        city: [''],
        state: [''],
        zip: [''],
        telNo: [''],
        email: [''],
      }),
    
   })
      
  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.invoiceForm.value);
  }
}
