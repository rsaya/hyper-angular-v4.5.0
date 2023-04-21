import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile2-userbox',
  templateUrl: './userbox.component.html',
  styleUrls: ['./userbox.component.scss']
})
export class Userbox2Component implements OnInit {

  @Input() loggedInUser: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
