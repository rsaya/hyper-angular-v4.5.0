import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ChartsModule } from 'ng2-charts';

// modules
import { PageTitleModule } from '../../../shared/page-title/page-title.module';
import { WidgetModule } from '../../../shared/widget/widget.module';
import { DashboardRoutingModule } from './dashboards-routing.module';

// components
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    AnalyticsComponent,
    CrmComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbDatepickerModule,
    ChartsModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    WidgetModule,
    PageTitleModule,
    DashboardRoutingModule,
  ],
  exports: [
    EcommerceComponent,
    AnalyticsComponent,
    CrmComponent,
    ProjectsComponent
  ]
})
export class DashboardModule { }
