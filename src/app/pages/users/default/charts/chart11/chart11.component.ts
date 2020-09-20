import { Component } from '@angular/core';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: "ngx-chart11",
  templateUrl: "./chart11.component.html",
  styleUrls: ["./chart11.component.scss"],
})
export class Chart11Component {
  colorScheme = {
    domain: ['#00ebc7', '#DBFB4B', '#a786df']
  };
  single = [
    {
      "name": "Положительные",
      "value": 31
    },{
      "name": "Нейтральные",
      "value": 24
    },{
      "name": "Отрицательные",
      "value": 65
    }
  ];

  isAxis = true;
  isAxisSub = new BehaviorSubject(false);
  constructor() {
    Object.assign(this, this.single);

    this.isAxisSub.subscribe((res)=>{this.isAxis=res;});
  }
  ngAfterViewInit(): void {
    this.isAxisSub.next(false);
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}






// import { Component, ViewChild } from "@angular/core";
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexYAxis,
//   ApexXAxis,
//   ApexTitleSubtitle,
//   ApexStroke,
//   ApexGrid,
//   ApexMarkers,
//   ApexTooltip,
//   ApexPlotOptions,
//   ApexResponsive,
//   ApexDataLabels,
//   ApexLegend,
//   ApexFill,
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   yaxis: ApexYAxis;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
//   stroke: ApexStroke;
//   grid: ApexGrid;
//   markers: ApexMarkers;
//   tooltip: ApexTooltip;
//   plotOptions: ApexPlotOptions;
//   responsive: ApexResponsive;
//   dataLabels: ApexDataLabels;
//   legend: ApexLegend;
//   fill: ApexFill;
// };
// @Component({
//   selector: "ngx-chart11",
//   templateUrl: "./chart11.component.html",
//   styleUrls: ["./chart11.component.scss"],
// })
// export class Chart11Component {
//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<any>;

//   constructor() {
//     this.chartOptions = {
//       series: [80, 50, 35],
//       labels: ["Поисковые системы", "Социальные сети", "Загрузка файлов"],
//       chart: {
//         type: "radialBar",
//         height: 400,
//       },
//       title: {
//         text: "Статистика интернет - соеденения | Chart 11",
//       },
//       fill: {
//         colors: ["#32CD32", "#20B2AA", "#9400D3"],
//       },
//       stroke: {
//         lineCap: "round",
//       },
//       plotOptions: {
//         radialBar: {
//           track: {
//             show: true,
//             dropShadow: {
//               enabled: true,
//               top: 0,
//               left: 0,
//               blur: 0,
//               opacity: 0.5
//             },
//           },
//           dataLabels: {
//             show: true,
//             name: {
//               show: true,
//             },
//             value: {
//               show: true
//             },
//             total: {
//               show: true,
//               label: "Общее время",
//               color: "black",
//             }
//           },
//         },
//       },
//       legend: {
//         show: true,
//         position: "bottom",
//         offsetY: -5,
//         markers: {
//           fillColors: ["#32CD32", "#20B2AA", "#9400D3"],
//         },
//       },
//     };
//   }
// }
