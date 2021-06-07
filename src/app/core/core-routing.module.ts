import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: CoreComponent },
  {path: 'address', component: AddressComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
