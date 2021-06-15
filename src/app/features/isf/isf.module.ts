import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ISFComponent } from './isf.component';
import { ISFRoutingModule } from './isf-routing.module';
import { IsfBasicComponent } from './isf-basic/isf-basic.component';
import { IsfHtsComponent } from './isf-hts/isf-hts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties/parties.component';

@NgModule({
  declarations: [
    ISFComponent,
    PartiesComponent,
    IsfBasicComponent,
    IsfHtsComponent
  ],
  imports: [
    CommonModule,
    ISFRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    CoreModule
  ]
})
export class ISFModule { }
