import { Component } from '@angular/core';

@Component({
  selector: "ngx-chart10",
  templateUrl: "./chart10.component.html",
  styleUrls: ["./chart10.component.scss"],
})
export class Chart10Component {
  // single: any[];
  // view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5A8DEE', '#FF5B5C', '#FDAC41']
  };
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  
  constructor() {
    Object.assign(this, this.single);
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
//   selector: "ngx-chart10",
//   templateUrl: "./chart10.component.html",
//   styleUrls: ["./chart10.component.scss"],
// })
// export class Chart10Component {
//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<any>;

//   constructor() {
//     this.chartOptions = {
//       series: [45, 30, 25],
//       labels: ["Копирование", "Удаление", "Отправка"],
//       chart: {
//         type: "radialBar",
//         height: 300,
//       },
//       title: {
//         text: "Статистика по работе с файлами | Chart 10",
//       },
//       fill: {
//         colors: ["#4169E1", "#FFD700", "#DC143C"],
//       },
//       stroke: {
//         lineCap: "round",
//       },
//       plotOptions: {
//         radialBar: {
//           track: {
//             show: false,
//             dropShadow: {
//               enabled: false,
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
//               formatter: function (w) {
//                 return w.globals.seriesTotals.reduce((a, b, c) => 
//                 {return a + b + c}, 0) 
//               },
//             },
//           },
//         },
//       },
//       legend: {
//         show: true,
//         position: "bottom",
//         offsetY: -20,
//         markers: {
//           fillColors: ["#4169E1", "#FFD700", "#DC143C"],
//         },
//       },
//     };
//   }
// }
