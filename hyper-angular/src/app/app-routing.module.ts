import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// auth guard
import { AuthGuard } from './core/guards/auth.guard';

// components
import { LayoutContainerComponent } from './layouts/layout-container.component';
import { Error404Component } from './pages/other-pages/custom-pages/error/error404/error404.component';
import { Error500Component } from './pages/other-pages/custom-pages/error/error500/error500.component';
import { MaintenanceComponent } from './pages/other-pages/custom-pages/others/maintenance/maintenance.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutContainerComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'error-404', component: Error404Component },
  { path: 'error-500', component: Error500Component },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'landing', loadChildren: () => import('./pages/other-pages/custom-pages/landing/landing.module').then(m => m.LandingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
