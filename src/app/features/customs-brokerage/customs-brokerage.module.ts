import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { CommonModule } from '@angular/common';
import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { CustomsBrokerageRoutingModule } from './customs-brokerage-routing.module';
import { DatesComponent } from './dates/dates.component';
import { ImporterComponent } from './importer/importer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomsBrokerageComponent,
    ImporterComponent,
    DatesComponent
  ],
  imports: [
    CommonModule,
    CustomsBrokerageRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRippleModule
  ]
})
export class CustomsBrokerageModule { }
