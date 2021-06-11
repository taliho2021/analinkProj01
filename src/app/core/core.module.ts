import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressComponent } from './address/address.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IsfInputComponent } from './isf-input/isf-input.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CoreComponent,
    NaviComponent,
    AddressComponent,
    LogInComponent,
    LogOutComponent,
    IsfInputComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    NaviComponent,
    AddressComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CoreModule { }
