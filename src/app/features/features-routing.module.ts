import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: FeaturesComponent }, 
  { path: 'customsBrokerage', loadChildren: () => import('./customs-brokerage/customs-brokerage.module').then(m => m.CustomsBrokerageModule) },
  { path: 'ams', loadChildren: () => import('./ams/ams.module').then(m => m.AmsModule) },
  { path: 'isf', loadChildren: () => import('./isf/isf.module').then(m => m.ISFModule) },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
