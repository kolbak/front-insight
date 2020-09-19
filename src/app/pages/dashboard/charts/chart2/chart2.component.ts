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
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexDataLabels,
  ApexLegend,
  ApexFill
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
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill
};

@Component({
  selector: 'ngx-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;

  chartValue: number = +(Math.random() * 100).toFixed(0);
  gradientSafari() {
    let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    //[0...100] --> [0...2] 
    // let color: string = ['#1FA2FF', '#FFFF00', '#E02001'][Math.floor(this.chartValue / (100 / 3) )];
    let color: string = [
      '#01579b', '#0277bd', '#0288d1', '#039be5', '#03a9f4',
      '#b71c1c', '#c62828', '#d32f2f', '#e53935', '#f44336'
    ][Math.floor(this.chartValue / (100 / 10) )];

    if (is_safari) {
      return {
        colors: [color],
        type: "solid",
      }
    }
    // Если не сафари
    return {
      type: "gradient",
      gradient: {
        type: 'diagonal1',
        gradientToColors: ["red"],
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    }
  }

  constructor() {
    this.chartOptions = {
      series: [this.chartValue],
      title: {
        text: 'Нагрузка интернет-соединения',
        offsetY: 35
      },
      chart: {
        height: 380,
        type: "radialBar",
        offsetY: -35
      },
      plotOptions: {
        radialBar: {
          startAngle: -125,
          endAngle: 125,
          dataLabels: {
            name: {
              show: false,
              fontSize: "16px",
            },
            value: {
              fontSize: "22px",
              formatter: (val: number) => val + "%"
            }
          }
        }
      },
      colors: ['blue'],
      fill: this.gradientSafari(),
      stroke: {
        dashArray: 6
      },
      // labels: [""]
    };

    console.log(this.chartOptions);
  }
}