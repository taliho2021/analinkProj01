import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule
  ]
})
export class FeaturesModule { }
