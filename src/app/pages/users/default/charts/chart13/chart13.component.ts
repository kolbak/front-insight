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
import { count } from 'console';

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
  selector: 'ngx-chart13',
  templateUrl: './chart13.component.html',
  styleUrls: ['./chart13.component.scss']
})
export class Chart13Component{
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  
  constructor() {
    this.chartOptions = {
      series: [{
          name: "Пн",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        },{
          name: "Вт",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        },{
          name: "Ср",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        },{
          name: "Чт",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        },{
          name: "Пт",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        },{
          name: "Сб",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        },{
          name: "Вс",
          data: this.generateData(27, {
            min: 0,
            max: 90
          })
        }],
      chart: {
        offsetY: -25,
        height: 280,
        type: 'heatmap',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          barHeight: '30%',
          horizontal: true,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      fill: {
        colors: ['#769ce3']
      },
      grid: {
        show: false
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '16px',
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      title: {
        offsetY: 25,
        text: 'Активность пользователя (курсор) за прошедшую неделю | Chart 13'
      }
    };
  }

  generateData(count: number, yrange: any) {
    let series = [];
    for(let i = 0, x: string, y: number; i < count; i++) {
      x = `${i}`;
      y = Math.floor(yrange.min + Math.random() * (yrange.max - yrange.min + 1));
      series.push({
        x: x,
        y: y
      });
    }
    return series;
  }
}