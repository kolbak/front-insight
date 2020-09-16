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

    if (this.screenWidth >= 575)
      this.sidebarService.compact('menu-sidebar');
    else
      this.sidebarService.toggle(false, 'menu-sidebar');
  }

  state: string = "expanded";
  screenWidth: number = screen.width;
  onResize() {
    this.screenWidth = screen.width;
    if (this.screenWidth <= 575) {
      this.state = "compacted";
    }
  }
  toggleSidebar() {

    this.sidebarService.toggle(true, 'menu-sidebar');      
    this.layoutService.changeLayoutSize();

    // if (this.screenWidth <= 575) {
    //   this.state = "compacted"; 
    // }
  }
  pointSidebar() {
    this.sidebarService.expand('menu-sidebar');      
  }
  hideSidebar() {
    if (this.screenWidth <= 575) {
      this.sidebarService.collapse('menu-sidebar');            
    }
  }


  KonamiCode(){
    this.router.navigate(['/mew']);
  }

  dispatchResize() {

  }
}
