import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';

// type
import { LayoutEventType } from 'src/app/core/constants/events';

@Component({
  selector: 'app-vertical-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit, OnChanges {


  @Input() isBoxed: boolean = false;
  @Input() sidebarTheme: string = "";
  @Input() sidebarType: string = "";

  reRender: boolean = true;
  constructor (
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.body.setAttribute('data-layout', 'vertical');
  }

  /**
   * changes layout configurations 
   */
  ngOnChanges() {
    this.changeLayoutConfig();
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
   * changes layout related options
   */
  changeLayoutConfig(): void {
    // boxed vs fluid
    if (this.isBoxed) {
      document.body.setAttribute('data-layout-mode', 'boxed');
      this._setRerender();
    } else {
      document.body.setAttribute('data-layout-mode', 'fluid');
      this._setRerender();
    }

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
    document.body.classList.toggle('sidebar-enable');
  }


}
