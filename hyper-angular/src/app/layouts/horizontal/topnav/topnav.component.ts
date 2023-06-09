import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// utility function
import { findAllParent, findMenuItem } from '../../shared/helper/utils';

// type
import { MenuItem } from '../../shared/models/menu.model';

// data
import { MENU } from '../../shared/config/menu-meta';

@Component({
  selector: 'app-horizontal-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Input() navbarTheme: string = '';
  @Input() navContainerCssClasses: string = '';
  @Input() showMobileMenu: boolean = true;


  menuItems: MenuItem[] = [];
  activeMenuItems: string[] = [];


  constructor (
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenu();
      }
    });
  }

  ngOnInit(): void {
    this.initMenu();
  }

  /**
   * On view init - activating menuitems
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this._activateMenu();
    });
  }


  /**
   * Initializing menuitems and controlling how many menu items can be displayed in it
   */
  initMenu(): void {
    this.menuItems = MENU.filter((item) => (!item.isTitle ? item : null));
    const defaultDisplayedItems = window.screen.width > 1366 ? 7 : 5;

    if (this.menuItems.length > defaultDisplayedItems) {
      const displayedItems = this.menuItems.slice(0, defaultDisplayedItems);
      displayedItems[0].collapsed = true;
      const otherItems: MenuItem = {
        key: 'more', label: 'More', isTitle: false, icon: 'uil-ellipsis-h', collapsed: true,
        children: this.menuItems.slice(defaultDisplayedItems, this.menuItems.length).map((i) => ({ ...i, parentKey: 'more' })),
      };
      this.menuItems = [...displayedItems, otherItems];
    }

  }

  /**
 * Returns true or false if given menu item has child or not
 * @param item menuItem
 */
  hasSubmenu(menu: MenuItem): boolean {
    return menu.children ? true : false;
  }


  /**
   *  Toggle the dropdown menu
   */
  toggleMenuItem(menuItem: MenuItem): void {
    menuItem.collapsed = !menuItem.collapsed;
    let openMenuItems: string[];
    if (!menuItem.collapsed) {
      openMenuItems = ([menuItem['key'], ...findAllParent(this.menuItems, menuItem)]);
      this.menuItems.forEach((menu: MenuItem) => {
        if (!openMenuItems.includes(menu.key!)) {
          menu.collapsed = true;
        }
      })

    }

  };


  /**
   * activate the menuitems
   */
  _activateMenu(): void {
    const div = document.getElementById('topnav-menu-content');
    let matchingMenuItem = null;
    if (div) {
      let items: any = div.getElementsByClassName('nav-link-ref');
      for (let i = 0; i < items.length; ++i) {
        if (window.location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key');
        const activeMt = findMenuItem(this.menuItems, mid);
        if (activeMt) {
          this.activeMenuItems = ([activeMt['key'], ...findAllParent(this.menuItems, activeMt)]);
        }

      }
    }

    this.menuItems.forEach((menu: MenuItem) => {
      menu.collapsed = true;
    })

  }



}
