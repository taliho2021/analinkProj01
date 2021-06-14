import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { ClientsComponent } from './clients/clients.component';
import { CoreComponent } from './core.component';
import { IsfInputComponent } from './isf-input/isf-input.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: CoreComponent },
  {path: 'address', component: AddressComponent},
  { path: 'isf-input', component: IsfInputComponent},
  { path: 'sign-in', component: LogInComponent},
  { path: 'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
