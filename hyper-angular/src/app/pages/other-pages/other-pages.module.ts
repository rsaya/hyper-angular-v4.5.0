import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { PageRoutingModule } from './other-pages-routing.module';
import { DashboardModule } from './dashboards/dashboards.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    DashboardModule
  ]
})
export class PageModule { }
