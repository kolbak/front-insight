import { ServerService } from './../../../../../server.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: "ngx-chart11",
  templateUrl: "./chart11.component.html",
  styleUrls: ["./chart11.component.scss"],
})
export class Chart11Component implements OnInit{
  colorScheme = {
    domain: ['#00ebc7', '#DBFB4B', '#a786df']
  };
  single = [
    {
      "name": "Положительные",
      "value": +(Math.random() * 100).toFixed(0)
    },{
      "name": "Нейтральные",
      "value": +(Math.random() * 75).toFixed(0)
    },{
      "name": "Отрицательные",
      "value": +(Math.random() * 25).toFixed(0)
    }
  ];

  isAxis;
  isAxisSub = new BehaviorSubject(null);
  constructor(private server: ServerService) {
    Object.assign(this, this.single);

    this.isAxisSub.subscribe((res)=>{this.isAxis=res;});
  }
  uuid ="";
  ngOnInit(){
    this.server.telecast.subscribe(id=>{ if(id!=this.uuid){
      this.uuid=id
      this.single = [
        {
          "name": "Положительные",
          "value": +(Math.random() * 100).toFixed(0)
        },{
          "name": "Нейтральные",
          "value": +(Math.random() * 75).toFixed(0)
        },{
          "name": "Отрицательные",
          "value": +(Math.random() * 25).toFixed(0)
        }
      ];
    }});}
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
