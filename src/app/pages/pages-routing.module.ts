import { RouterModule, Routes } from '@angular/router';

import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { HtmlBlockComponent } from './html-block/html-block.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
       {path: 'html', component:HtmlBlockComponent},
       {path: 'main', component: MainLandingComponent},
       {path: 'entry-summary', component: EntrySummaryComponent}
     ] 
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
