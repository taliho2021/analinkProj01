import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomsBrokerageRoutingModule } from './customs-brokerage-routing.module';
import { CustomsBrokerageComponent } from './customs-brokerage.component';
import { ImporterComponent } from './importer/importer.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomsBrokerageComponent,
    ImporterComponent
  ],
  imports: [
    CommonModule,
    CustomsBrokerageRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class CustomsBrokerageModule { }
