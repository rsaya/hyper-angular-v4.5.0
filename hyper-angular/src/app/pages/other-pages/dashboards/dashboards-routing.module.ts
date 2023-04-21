import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'crm',
    component: CrmComponent
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent
  },
  {
    path: '',
    redirectTo: 'dashboard/ecommerce',
    pathMatch: 'full'
  },
  {
    path: 'project',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
