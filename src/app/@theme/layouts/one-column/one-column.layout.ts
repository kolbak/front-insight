import { Component, AfterViewInit } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: 'one-column.layout.html',
})
export class OneColumnLayoutComponent implements AfterViewInit {

    constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService) {

  }
  ngAfterViewInit() {
    // this.toggleSidebar();
  }

  booToggleSideIcon: boolean = true;
  toggleSidebar(): boolean {
    // let logoCont = document.querySelector('.styles_logoContainer__2IbFS') as HTMLElement;
    // logoCont.style.visibility = 'hidden';
    this.booToggleSideIcon = !this.booToggleSideIcon;

    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
}
