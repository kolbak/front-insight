import { User, ServerService } from './../../../server.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isRevealed = [false, false, false];

  screenHeight: number = screen.height;
  screenWidth: number = screen.width;
  onResize() {
    this.screenWidth = screen.width;
    this.screenHeight = screen.height;
  }

  isSmallScreen: boolean;
  isTabletScreen: boolean;
  isXSmallScreen: boolean;

  constructor(private breakpointObserver:BreakpointObserver,public server: ServerService) { }

  user: User = new User();

  ngOnInit() {
    try {
      this.user = this.server.allusers[0];
    } catch (e) {}

    this.server.telecastUser.subscribe(resp=>{this.user=resp?resp:this.user;})


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
