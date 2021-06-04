import { AmsComponent } from './ams.component';
import { AmsRoutingModule } from './ams-routing.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AmsComponent
  ],
  imports: [
    CommonModule,
    AmsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class AmsModule { }
