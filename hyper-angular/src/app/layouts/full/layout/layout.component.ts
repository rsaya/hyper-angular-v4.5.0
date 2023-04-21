import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';
// type
import { LayoutEventType } from 'src/app/core/constants/events';


@Component({
  selector: 'app-full-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() sidebarTheme: string = "";
  @Input() sidebarType: string = "";

  reRender: boolean = true;

  constructor (
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  /**
 * On view init - activating full layout
 */
  ngAfterViewInit() {
    document.body.setAttribute('data-layout', 'full');
    document.body.removeAttribute('data-layout-mode');
    document.body.classList.add('hide-menu');
  }


  ngOnDestroy() {
    document.body.classList.remove('hide-menu');
  }

  /**
 * controls re-rendering
 */
  _setRerender = () => {
    this.reRender = false;
    setTimeout(() => {
      this.reRender = true;
    }, 0.05);
  }


  /**
   * changes layout configurations 
   */
  ngOnChanges() {
    this.changeLayoutConfig();
  }
  /**
   * changes layout related options
   */
  changeLayoutConfig(): void {
    // left sidebar theme
    document.body.setAttribute('data-leftbar-theme', this.sidebarTheme);

    // left sidebar type
    document.body.setAttribute('data-leftbar-compact-mode', this.sidebarType);
  }


  /**
* on settings button clicked from topbar
*/
  onSettingsButtonClicked() {
    this.eventService.broadcast(LayoutEventType.SHOW_RIGHT_SIDEBAR);
  }

  /**
 * On mobile toggle button clicked
 */
  onToggleMobileMenu() {
    if (document.body.classList.contains('hide-menu')) {
      document.body.classList.remove('hide-menu');
      document.body.classList.add('sidebar-enable');
    }
    else {
      document.body.classList.add('hide-menu');
      document.body.classList.remove('sidebar-enable');
    }
  }

}
