import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  grid: ApexGrid;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'ngx-chart7',
  templateUrl: './chart7.component.html',
  styleUrls: ['./chart7.component.scss']
})
export class Chart7Component {
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  
  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Кол-во',
        data: [80, 50, 30, 40, 90, 20, 5, 35, 50],
      }],
      chart: {
        offsetY: -15,
        height: 190,
        type: 'line',
        toolbar: {
          show: false,
        },
        // dropshadow: this.dropshadowSafari(),
        dropShadow: /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? 
        { enabled: false } : {
          enabled: true,
          top: 5,
          blur: 3,
          color: '#39DA8A',
          opacity: 0.35
        },
        zoom: {
          enabled: false,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        colors: ['#39DA8A']
      },
      title: {
        offsetY: 15,
        text: 'Объём продаж'
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        type: 'category',
        categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь'],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        tooltip: {
            enabled: true,
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          }
        },
      },
      markers: {
        colors: '#39DA8A',
        strokeColors: 'white',
        strokeWidth: 3,
        hover: {
          size: 7,
          sizeOffset: 3
        }
      },
      tooltip: {
        enabled: true,
        theme: 'light',
        marker: {
            show: false,
        },
        x: {
          show: false
        }
      }
    };
  }
}