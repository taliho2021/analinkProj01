import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
                        { path: '', component: SharedComponent},
                        { path: 'dashboard', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
                        { path: 'address', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
                        { path: 'drag-drop', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// dashboard', 'address', 'drag-drop', 'import-table', 'mat-tree','Entry Summary', 'Statements', 'Reports', 'Codes', 'Data Query'
