import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  shipmentForm = this.fb.group({
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
    console.warn(this.shipmentForm.value);
  }
}
