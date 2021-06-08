import { RouterModule, Routes } from '@angular/router';

import { MainLandingComponent } from './main-landing/main-landing.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: MainLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
