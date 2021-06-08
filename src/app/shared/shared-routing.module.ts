import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {path: '', component: SharedComponent,
   children: [
     {path: '', component: SharedComponent},
     {path:'dashboard01', component: Dashboard01Component},
     {path: 'dashboard02', component: Dashboard02Component},
     {path: 'card', component: CardComponent}
    ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
