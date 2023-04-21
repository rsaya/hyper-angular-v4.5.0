import { Component, OnInit } from '@angular/core';

// type
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';

// data
import { MdiIcon, MDIICONSLIST } from './data';

@Component({
  selector: 'app-icons-mdi',
  templateUrl: './mdi.component.html',
  styleUrls: ['./mdi.component.scss']
})
export class MdiComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  mdiIconsList: MdiIcon[] = [];
  mdiNewIcons: MdiIcon[] = [];

  constructor () { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Icons', path: '/' }, { label: 'Mdi Icons', path: '/', active: true }];
    this.mdiIconsList = MDIICONSLIST;
    this.mdiNewIcons = MDIICONSLIST.filter((icon: MdiIcon) => icon.version === '5.8.55');
  }

}
