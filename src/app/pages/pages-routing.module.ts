import { RouterModule, Routes } from '@angular/router';

import { HtmlBlockComponent } from './html-block/html-block.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: MainLandingComponent,
    children: [
       {path: 'html', component:HtmlBlockComponent}
     ] 
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
