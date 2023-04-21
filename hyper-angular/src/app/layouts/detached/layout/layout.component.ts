import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';
// type
import { LayoutEventType } from 'src/app/core/constants/events';

@Component({
  selector: 'app-detached-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @Input() sidebarType: string = "";

  constructor (private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  /**
   * On view init - activating detached layout
   */
  ngAfterViewInit() {
    document.body.setAttribute('data-layout', 'detached');
    document.body.removeAttribute('data-layout-mode');
  }


  ngOnChanges() {
    this.changeLayoutConfig();
  }

  /**
   * changes layout related options
   */
  changeLayoutConfig(): void {

    // left sidebar type
    document.body.setAttribute('data-leftbar-compact-mode', this.sidebarType);
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
    document.body.classList.toggle('sidebar-enable');
  }
}
