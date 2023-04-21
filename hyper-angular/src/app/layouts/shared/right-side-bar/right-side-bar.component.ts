import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';

// type
import { LayoutEventType } from 'src/app/core/constants/events';

// layout constants
import {
  LAYOUT_VERTICAL, LAYOUT_WIDTH_FLUID, SIDEBAR_THEME_DEFAULT, SIDEBAR_WIDTH_FIXED
} from '../models/layout.model';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit, OnChanges {

  private isShowing: boolean = false;
  public disableSidebarWidth: boolean = false;

  // layout config
  @Input() layoutType!: string;
  @Input() layoutWidth!: string;
  @Input() leftSidebarTheme!: string;
  @Input() leftSidebarWidth!: string;


  rightSidebarClass = 'end-bar-enabled';

  constructor (
    private renderer: Renderer2,
    private eventService: EventService
  ) {
    // listen to event and open/hide the right sidebar

    // show
    this.eventService.subscribe(LayoutEventType.SHOW_RIGHT_SIDEBAR, () => {
      this.show();
    });

    // hide
    this.eventService.subscribe(LayoutEventType.HIDE_RIGHT_SIDEBAR, () => {
      this.hide();
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.isShowing) {
      this.renderer.addClass(document.body, this.rightSidebarClass);
    } else {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
    }
    if (window.innerWidth <= 1024 && this.layoutType === 'full') {
      this.disableSidebarWidth = true;
    }
    else {
      this.disableSidebarWidth = false;
    }
  }

  /**
   * Toggle the sidebar
   */
  toggleRightSideBar(): void {
    if (document.body.classList.contains(this.rightSidebarClass)) {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
    } else {
      this.renderer.addClass(document.body, this.rightSidebarClass);
    }
  }

  /**
   * Shows the sidebar
   */
  show(): void {
    setTimeout(() => {
      this.isShowing = true;
      this.renderer.addClass(document.body, this.rightSidebarClass);
    }, 100);
  }

  /**
   * Hide the sidebar
   */
  hide(): void {
    if (document.body.classList.contains(this.rightSidebarClass)) {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
      this.isShowing = false;
    }
  }

  /**
   * Change the given layout
   * @param layout layout name
  */
  changeLayout(layout: string): void {
    this.layoutType = layout;
    this.eventService.broadcast(LayoutEventType.CHANGE_LAYOUT, layout);
  }

  /**
   * Change the width
   * @param layout width type
   */
  changeLayoutWidth(width: string): void {
    this.layoutWidth = width;
    this.eventService.broadcast(LayoutEventType.CHANGE_LAYOUT_WIDTH, width);
  }

  /**
   * Change the side bar theme
   * @param theme name
   */
  changeLeftSidebarTheme(theme: string): void {
    this.leftSidebarTheme = theme;
    this.eventService.broadcast(LayoutEventType.CHANGE_LEFT_SIDEBAR_THEME, theme);
  }

  /**
   * Change the side bar width
   * @param type type of sidebar
   */
  changeLeftSidebarType(type: string): void {
    this.leftSidebarWidth = type;
    this.eventService.broadcast(LayoutEventType.CHANGE_LEFT_SIDEBAR_TYPE, type);
  }

  /**
   * Reset everything
   */
  reset(): void {
    this.changeLayout(LAYOUT_VERTICAL);
    this.changeLayoutWidth(LAYOUT_WIDTH_FLUID);
    this.changeLeftSidebarType(SIDEBAR_WIDTH_FIXED);
    this.changeLeftSidebarTheme(SIDEBAR_THEME_DEFAULT);
  }

}
