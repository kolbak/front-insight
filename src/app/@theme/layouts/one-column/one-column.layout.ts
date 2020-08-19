import { Component, AfterViewInit } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: './one-column.layout.html',
})
export class OneColumnLayoutComponent implements AfterViewInit {

    constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService) {

  }
  ngAfterViewInit() {
    // this.toggleSidebar();
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
}
