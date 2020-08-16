import { Component, ViewChild, AfterContentInit } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'ngx-chart7',
  templateUrl: './chart7.component.html',
  styleUrls: ['./chart7.component.scss']
})
export class Chart7Component implements AfterContentInit{
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  
  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
      chart: {
        // width: 150,
        height: 190,
        type: 'line',
        dropShadow: {
          enabled: true,
          blur: 2,
          left: 2,
          top: 2
        }
      },
      title: {
        text: 'Chart 7'
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
      }
    };
  }
  
  ngAfterContentInit() {

  }
}