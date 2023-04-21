import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-userbox',
  templateUrl: './userbox.component.html',
  styleUrls: ['./userbox.component.scss']
})
export class UserboxComponent implements OnInit {

  @Input() loggedInUser: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
