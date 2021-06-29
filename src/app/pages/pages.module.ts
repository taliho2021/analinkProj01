import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { HtmlBlockComponent } from './html-block/html-block.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    MainLandingComponent,
    HtmlBlockComponent,
    EntrySummaryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    CarouselModule.forRoot()
  ]
})
export class PagesModule { }
