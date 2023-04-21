import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// modules
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { DropdownsRoutingModule } from './dropdowns-routing.module';

// components
import { DropdownsComponent } from './dropdowns.component';


@NgModule({
  declarations: [
    DropdownsComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    PageTitleModule,
    DropdownsRoutingModule
  ]
})
export class DropdownsModule { }
