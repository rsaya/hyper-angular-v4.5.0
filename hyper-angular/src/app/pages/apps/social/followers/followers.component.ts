import { Component, Input, OnInit } from '@angular/core';

// type
import { User } from '../shared/social.model';


@Component({
  selector: 'app-social-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  @Input() peopleToFollow: User[] = [];

  constructor () { }

  ngOnInit(): void {
  }



}
