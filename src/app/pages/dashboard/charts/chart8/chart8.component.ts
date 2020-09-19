import { BehaviorSubject } from 'rxjs';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-chart8',
  templateUrl: './chart8.component.html',
  styleUrls: ['./chart8.component.scss']
})
export class Chart8Component implements AfterViewInit{
  // options
  isDoughnut: boolean = true;
  colorScheme = {
    domain: ['#5A8DEE', '#00CFDD', '#FDAC41']
  };

  single = this.genSingleData();
  genSingleData() {
    let labels = ["Отдел маркетинга", "Отдел разработки", "Отдел поддержки"];
    let arr = [];
    for(let i = 0, l = 3; i < l; i++){
      let obj = {
        name : '',
        value: 0
      };
      obj.name  = labels[i];
      obj.value = Math.floor(1 + Math.random() * 99);
      arr.push(obj);
    };
    return arr;
  }
  gradient ;
  gradientListener = new BehaviorSubject(false);
  constructor() {
    Object.assign(this, this.single);
    this.gradientListener.subscribe((resp)=>this.gradient = resp);
  }
ngAfterViewInit(){
this.gradientListener.next(true);
console.log('object :>> ');
}
  onSelect(data): void { }
  onActivate(data): void { }
  onDeactivate(data): void { }
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
//   ApexFill
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
//   fill: ApexFill
// };
// @Component({
//   selector: 'ngx-chart8',
//   templateUrl: './chart8.component.html',
//   styleUrls: ['./chart8.component.scss']
// })
// export class Chart8Component{

//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<any>;

//   constructor() {
//     this.chartOptions = {
//       series: [80, 30, 60],
//       labels: ['Social', 'Email', 'Search'],
//       chart: {
//         type: 'donut',
//         height: 230
//       },
//       title: {
//         text: 'Chart 8'
//       },
//       fill: {
//         colors: ['#5A8DEE', '#00CFDD', '#FDAC41']
//       },
//       stroke: {
//         show: false
//       },
//       plotOptions: {
//         pie: {
//           expandOnClick: false,
//           donut: {
//             size: '87%',
//             labels: {
//               show: true,
//               name: {
//                 show: true,
//               },
//               value: {
//                 show: true,
//               },
//               total: {
//                 show: true,
//                 color: 'black'
//               }
//             }
//           },
//         }
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       legend: {
//         show: true,
//         position: 'bottom',
//         offsetY: -10,
//         markers: {
//           fillColors: ['#5A8DEE', '#00CFDD', '#FDAC41']
//         }
//       }
//     };
//   }
// }
