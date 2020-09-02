import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  screenWidth: number  = screen.width;
  adaptCharts: boolean = false;

  public constructor() {
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
