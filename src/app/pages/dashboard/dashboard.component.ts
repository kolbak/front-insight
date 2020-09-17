import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  // массив значений для легенд графиков | по порядку для графиков 1 - 9 | Пока используется 3 значения
  isRevealed = [false, false, false, false, false, false, false, false, false];

  isSmallScreen: boolean;
  isTabletScreen: boolean;
  isXSmallScreen: boolean;

  ngOnInit(){
    this.breakpointObserver
      .observe(Breakpoints.Small)
      .subscribe((resp) => (this.isSmallScreen = resp.matches));
    this.breakpointObserver
      .observe(Breakpoints.Medium)
      .subscribe((resp) => (this.isTabletScreen = resp.matches));
    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .subscribe((resp) => (this.isXSmallScreen = resp.matches));
  }

  screenWidth: number = screen.width;
  onResize() {
    this.screenWidth = screen.width;
  }

  adaptCharts: boolean = false;
  public constructor(
    private breakpointObserver:BreakpointObserver,
    private sidebarService: NbSidebarService) {

    if(this.screenWidth <= 1040)
      this.adaptCharts = true;
    
    window.addEventListener('resize', () => {
      this.adaptCharts = document.documentElement.clientWidth <= 1740;});
    window.addEventListener('load', () => {
      this.adaptCharts = document.documentElement.clientWidth <= 1740;});

      if (this.screenWidth >= 575)
        this.sidebarService.compact('menu-sidebar');
      else
        this.sidebarService.toggle(false, 'menu-sidebar');
  }
}
