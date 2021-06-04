import { RouterModule, Routes } from '@angular/router';

import { ISFComponent } from './isf.component';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties/parties.component';

const routes: Routes = [{ path: '', component: ISFComponent,
children: [
  { path: 'parties', component: PartiesComponent},
] } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ISFRoutingModule { }
