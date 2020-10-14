import { BehaviorSubject } from 'rxjs';
import { ServerService } from './../../../../../server.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: "ngx-chart10",
  templateUrl: "./chart10.component.html",
  styleUrls: ["./chart10.component.scss"],
})
export class Chart10Component implements OnInit {
  colorScheme = {
    // domain: ['#5A8DEE', '#FDAC41', '#FF5B5C']
    domain: ['#00D68F', '#FF9A00', '#FF3D71']
  };
  single = [
    {
      "name": "Безопасные",
      "value": +(Math.random() * 200).toFixed(0)
    },{
      "name": "Потенциально небезопасные",
      "value": +(Math.random() * 75).toFixed(0)
    },{
      "name": "Опасные",
      "value": +(Math.random() * 50).toFixed(0)
    }
  ];
  isAxis = true;
  isAxisSub = new BehaviorSubject(false);
  constructor(private server : ServerService) {

Object.assign(this,this.single);
    this.isAxisSub.subscribe((res)=>{this.isAxis=res;});
  }
  uuid ="";
  ngOnInit(){
    this.server.telecast.subscribe(id=>{ if(id!=this.uuid){
      this.uuid=id
 this.single = [
  {
    "name": "Безопасные",
    "value": +(Math.random() * 200).toFixed(0)
  },{
    "name": "Потенциально небезопасные",
    "value": +(Math.random() * 75).toFixed(0)
  },{
    "name": "Опасные",
    "value": +(Math.random() * 50).toFixed(0)
  }
]}

    });
  }
  ngAfterViewInit(): void {
    this.isAxisSub.next(false);
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
