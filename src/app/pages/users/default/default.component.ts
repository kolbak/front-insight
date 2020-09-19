import { User } from './../../../server.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

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

  constructor(private breakpointObserver:BreakpointObserver) { }

  user: User;

  ngOnInit() {
    this.user = new User();//this.server.allusers[0];
    this.user.full_name = "John Doe";
    this.user.sector = "Engineer";

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
