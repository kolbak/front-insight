import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { UserData } from '../../../@core/data/users';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: 'one-column.layout.html',
})
export class OneColumnLayoutComponent {

    constructor(
      private router: Router,
      private sidebarService: NbSidebarService,
      private layoutService: LayoutService, 
      private userService: UserData) {

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

  //----------------------------------------Пользователь
  user: any;
  private destroy$: Subject<void> = new Subject<void>();


  userMenu = [ { title: 'Profile' }, { title: 'Log out' },
  {
    title: 'Login',
    link: '/auth/login',
  }, {
    title: 'Register',
    link: '/auth/register',
  },{
    title: 'Request Password',
    link: '/auth/request-password',
  }, {
    title: 'Reset Password',
    link: '/auth/reset-password',
  },
];

  ngOnInit() {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.alan);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
