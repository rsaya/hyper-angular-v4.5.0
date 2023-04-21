import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { DashboardModule } from '../dashboards/dashboards.module';

// components
import { MaintenanceComponent } from './others/maintenance/maintenance.component';


@NgModule({
  declarations: [

    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    CustomPagesRoutingModule
  ]
})
export class CustomPagesModule { }
