import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() loggedInUser: any = {};

  constructor () { }

  ngOnInit(): void {
  }

}
