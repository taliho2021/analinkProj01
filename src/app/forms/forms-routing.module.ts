import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { NgModule } from '@angular/core';
import { ShipmentComponent } from './import/shipment/shipment.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'shipment', component: ShipmentComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
