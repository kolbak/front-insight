import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
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
  screenWidth: number  = screen.width;
  adaptCharts: boolean = false;
  public constructor(private breakpointObserver:BreakpointObserver) {
    if(this.screenWidth <= 1740) {
      this.adaptCharts = true;
    }
    window.addEventListener('resize', () => {
      this.adaptCharts = document.documentElement.clientWidth <= 1740;
    });
    window.addEventListener('load', () => {
      this.adaptCharts = document.documentElement.clientWidth <= 1740;
    });
  }
}
