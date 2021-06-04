import { RouterModule, Routes } from '@angular/router';

import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { ImporterComponent } from './importer/importer.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CustomsBrokerageComponent,
    children: [
      { path: 'importer', component: ImporterComponent},
    ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomsBrokerageRoutingModule { }
