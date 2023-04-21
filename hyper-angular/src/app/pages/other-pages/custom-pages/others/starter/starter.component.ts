import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../../../shared/page-title/page-title.model';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Pages', path: '/' }, { label: 'Starter', path: '/', active: true }];
  }

}
