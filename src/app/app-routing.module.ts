import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './core/log-in/log-in.component';
import { LogOutComponent } from './core/log-out/log-out.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
                        { path: '', redirectTo: 'signin', pathMatch:'full'},
                        { path: 'signin', component: LogInComponent},
                        { path: 'signout', component: LogOutComponent},
                        { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
                        { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
                        { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
                        { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
                        { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
                        { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// singin  signout  core shared  features   core pages
