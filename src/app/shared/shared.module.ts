import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    SharedComponent,
    CardComponent,
    Dashboard01Component,
    Dashboard02Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRippleModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ]
})
export class SharedModule { }
