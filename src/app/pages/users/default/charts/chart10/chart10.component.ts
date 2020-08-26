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
  ApexFill,
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
  fill: ApexFill;
};
@Component({
  selector: "ngx-chart10",
  templateUrl: "./chart10.component.html",
  styleUrls: ["./chart10.component.scss"],
})
export class Chart10Component {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [70, 80, 90],
      labels: ["Копирование", "Удаление", "Отправка"],
      chart: {
        type: "radialBar",
        height: 300,
      },
      title: {
        text: "Статистика по работе с файлами",
      },
      fill: {
        colors: ["#4169E1", "#FFD700", "#DC143C"],
      },
      stroke: {
        lineCap: "round",
      },
      plotOptions: {
        radialBar: {
          track: {
            show: false,
            dropShadow: {
              enabled: false,
            },
          },
          size: "85%",
          labels: {
            show: false,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
            total: {
              show: true,
              label: "Активность",
              color: "black",
            },
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
        position: "bottom",
        offsetY: -5,
        markers: {
          fillColors: ["#4169E1", "#FFD700", "#DC143C"],
        },
      },
    };
  }
}
