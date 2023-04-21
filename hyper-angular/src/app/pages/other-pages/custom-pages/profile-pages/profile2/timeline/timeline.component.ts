import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// type
import { Comment } from 'src/app/pages/apps/social/shared/social.model';
import { TimelinePost } from '../profile2.model';

// data
import { POSTS } from '../data';

@Component({
  selector: 'app-profile2-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  newPost: string = '';
  timelinePosts: TimelinePost[] = [];

  constructor (private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._fetchData();
  }

  /**
   * fetches timeline data
   */
  _fetchData(): void {
    this.timelinePosts = POSTS;
  }

  /**
 * returns the safe content which can be rendered
 * @param content string
 */
  getRenderedPostContent(content: string) {
    if (content.includes("iframe")) {
      return this.sanitizer.bypassSecurityTrustHtml(content);
    }
    return this.sanitizer.sanitize(1, content);
  }

  /**
   * toggle like
   * @param post post
   */
  toggleLike(post: TimelinePost) {
    post.isLiked = !post.isLiked;
  }

  /**
   * toggle like on comment
   * @param comment comment obj
   */
  toggleLikeOnComment(comment: Comment) {
    comment.isLiked = !comment.isLiked;
  }

}
