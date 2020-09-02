import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: 'one-column.layout.html',
})
export class OneColumnLayoutComponent {

    constructor(
      private router: Router,
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService) {

  }

  booToggleSideIcon: boolean = true;
  toggleSidebar(): boolean {
    this.booToggleSideIcon = !this.booToggleSideIcon;

    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
  KonamiCode(){
    this.router.navigate(['/mew']);
  }

  dispatchResize() {

  }
}
