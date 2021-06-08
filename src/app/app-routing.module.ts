import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './core/log-in/log-in.component';
import { LogOutComponent } from './core/log-out/log-out.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
                        { path: '', redirectTo: 'signin', pathMatch:'full'},
                        { path: 'signin', component: LogInComponent},
                        { path: 'signout', component: LogOutComponent},
                        { path: 'dashboard', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
                        { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
                        { path: 'drag-drop', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
                        { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// dashboard', 'address', 'drag-drop', 'import-table', 'mat-tree','Entry Summary', 'Statements', 'Reports', 'Codes', 'Data Query'
