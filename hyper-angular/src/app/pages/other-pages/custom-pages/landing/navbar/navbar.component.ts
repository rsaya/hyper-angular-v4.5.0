import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobileMenuOpen: boolean = false;
  loggedInUser: any = {};

  constructor (private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.currentUser();
  }

}
