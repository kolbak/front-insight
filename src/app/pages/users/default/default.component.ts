import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isSmallScreen: boolean;
  isTabletScreen: boolean;
  isXSmallScreen: boolean;

  constructor(private breakpointObserver:BreakpointObserver) { }

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

}
