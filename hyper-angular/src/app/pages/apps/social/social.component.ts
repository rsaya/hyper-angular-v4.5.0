import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/auth.service';

// type
import { BreadcrumbItem } from '../../../shared/page-title/page-title.model';
import { Post, SocialEvent, Topic, User } from './shared/social.model';

// data
import { news, peopleToFollow, posts, socialEvents } from './shared/data';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  loggedInUser: any = {};
  socialEvents: SocialEvent[] = [];
  trendingNews: Topic[] = [];
  socialFeeds: Post[] = [];
  peopleToFollow: User[] = [];

  constructor (private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Social', path: '/' }, { label: 'Feed', path: '/', active: true }];

    this.loggedInUser = this.authService.currentUser();

    // get data
    this._fetchData();
  }


  /**
   *  fetches event data
   */
  _fetchData(): void {
    this.socialEvents = [...socialEvents];
    this.trendingNews = news;
    this.socialFeeds = posts;
    this.peopleToFollow = peopleToFollow;
  }

}
