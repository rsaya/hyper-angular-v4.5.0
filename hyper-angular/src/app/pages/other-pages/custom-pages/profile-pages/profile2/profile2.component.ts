import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../../core/service/auth.service';

// type
import { BreadcrumbItem } from '../../../../../shared/page-title/page-title.model';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss']
})
export class Profile2Component implements OnInit {

  activeID = 2;
  pageTitle: BreadcrumbItem[] = [];

  loggedInUser: any = {};
  constructor (private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Pages', path: '/' }, { label: 'Profile 2', path: '/', active: true }];
    this.loggedInUser = this.authService.currentUser();
  }

}
