import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HtmlBlockComponent } from './html-block/html-block.component';

@NgModule({
  declarations: [
    PagesComponent,
    MainLandingComponent,
    HtmlBlockComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class PagesModule { }
