import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';
// type
import { LayoutEventType } from 'src/app/core/constants/events';

@Component({
  selector: 'app-horizontal-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @Input() isBoxed: boolean = false;
  @Input() configuredDemo: string = '';

  topbarCssClasses: string = '';
  topnavTheme: string = '';
  topnavContainerClasses: string = '';
  showMobileMenu: boolean = false;
  reRender: boolean = true;

  constructor (private eventService: EventService) { }

  ngOnInit(): void {
    // css classes based on theme demo
    this.topbarCssClasses = this.configuredDemo === 'creative' ? 'topnav-navbar topnav-navbar-dark' : 'topnav-navbar';
    this.topnavTheme = this.configuredDemo === 'creative' ? 'light' : 'dark';
    this.topnavContainerClasses = this.configuredDemo === 'creative' ? 'shadow-sm' : '';
  }


  /**
   * performs re-rendering
   */
  _setRerender = () => {
    this.reRender = false;
    setTimeout(() => {
      this.reRender = true;
    }, 0.05);
  }

  /**
   * On view init - activating horizontal layout
  */
  ngAfterViewInit() {
    document.body.setAttribute('data-layout', 'topnav');
    document.body.removeAttribute('data-leftbar-theme');
    document.body.removeAttribute('data-leftbar-compact-mode');
  }


  /**
 * On prop change, apply layout settings
 */
  ngOnChanges() {
    this.changeLayoutConfig();
  }

  /**
  * changes layout related options
  */
  changeLayoutConfig(): void {
    if (this.isBoxed) {
      document.body.setAttribute('data-layout-mode', 'boxed');
      this._setRerender();
    } else {
      document.body.setAttribute('data-layout-mode', 'fluid');
      this._setRerender();
    }
  }

  /**
   * On settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    this.eventService.broadcast(LayoutEventType.SHOW_RIGHT_SIDEBAR);
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

}
