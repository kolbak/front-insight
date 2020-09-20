import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';

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
export class OneColumnLayoutComponent implements OnInit{
    constructor(
      private router: Router,
      private sidebarService: NbSidebarService,
      private layoutService: LayoutService, 
      private userService: UserData) {
    // if (this.screenWidth >= 575)
    //   this.sidebarService.compact('menu-sidebar');
    // else
    //   this.sidebarService.toggle(false, 'menu-sidebar');
  }

  @ViewChild('userAccord') userAccordion;
  screenWidth: number = screen.width;
  // isExpanded: boolean = false;
  onResize() {
    this.screenWidth = screen.width;
    // if(this.screenWidth >= 1200){
    //   this.sidebarService.compact('menu-sidebar');
    // }
    // Сворачиваем меню при клике на сворачивание и при 1500
    try {
      this.userAccordion.close(); 
    } catch(e) {}
  }


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;

    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    // Сворачиваем меню при клике на сворачивание и при 1500
    try {
      this.userAccordion.close();
    } catch(e) {}
  }
  // pointSidebar() {
  //   this.sidebarService.expand('menu-sidebar');      
  // }
  // hideSidebar() {
    // if (this.screenWidth <= 575) {
    //   this.sidebarService.collapse('menu-sidebar');            
    // }
  // }


  KonamiCode(){
    this.router.navigate(['/mew']);
  }

  dispatchResize() {

  }

  //----------------------------------------Пользователь
  user: any;
  private destroy$: Subject<void> = new Subject<void>();


  userMenu = [ { title: 'Profile', icon: 'smiling-face-outline' }, { title: 'Log out', icon: 'log-out-outline' },
  // {
  //   title: 'Login',
  //   link: '/auth/login',
  // }, {
  //   title: 'Register',
  //   link: '/auth/register',
  // },{
  //   title: 'Request Password',
  //   link: '/auth/request-password',
  // }, {
  //   title: 'Reset Password',
  //   link: '/auth/reset-password',
  // },
];

  isExpanded: boolean = false
  ngOnInit() {
    // this.sidebarService.onExpand().subscribe((obj) => { // {tag: 'menu-sidebar}
    //   this.isExpanded = !this.isExpanded;
    //   console.log('expanded',this.isExpanded)
    // });
    // this.sidebarService.onCompact().subscribe((obj) => { // {tag: 'menu-sidebar}
    //   this.isExpanded = !this.isExpanded;
    //   console.log('compacted',this.isExpanded)
    // })
    // this.sidebarService.onToggle().subscribe((obj) => { // {tag: 'menu-sidebar}
    //   console.log('toggle',this.isExpanded)
    //   this.isExpanded = !this.isExpanded;
    //   console.log('toggle',this.isExpanded)
    // })

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.alan);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
