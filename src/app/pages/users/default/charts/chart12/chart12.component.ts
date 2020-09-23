import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chart12',
  templateUrl: './chart12.component.html',
  styleUrls: ['./chart12.component.scss']
})
export class Chart12Component {
  // single: any[];
  // view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;

  colorScheme = {
    domain: ['#769ce3']
  };

  single = [
    {
      "name": ".jpeg, .png, .png",
      "value": +(Math.random() * 350).toFixed(0)
    }, {
      "name": ".word, .xls, .txt",
      "value": +(Math.random() * 400).toFixed(0)
    }, {
      "name": ".pdf",
      "value": +(Math.random() * 300).toFixed(0)
    }, {
      "name": ".mpeg4, .avi",
      "value": +(Math.random() * 40).toFixed(0)
    }, {
      "name": ".mp3",
      "value": +(Math.random() * 70).toFixed(0)
    }, {
      "name": ".exe",
      "value": +(Math.random() * 25).toFixed(0)
    }, {
      "name": "Другое",
      "value": +(Math.random() * 30).toFixed(0)
    }
  ];
  constructor() {
    Object.assign(this, this.single);
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
//   selector: 'ngx-chart12',
//   templateUrl: './chart12.component.html',
//   styleUrls: ['./chart12.component.scss']
// })
// export class Chart12Component{

//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<any>;

//   constructor() {
//     this.chartOptions = {
//       series: [{
//           name: "basic",
//           data: [24, 11, 24, 35, 65, 9, 12]
//         }],
//       chart: {
//         offsetX: 10,
//         offsetY: -20,
//         height: 400,
//         type: 'bar',
//         toolbar: {
//           show: false
//         },
//         zoom: {
//           enabled: false
//         }
//       },
//       plotOptions: {
//         bar: {
//           barHeight: '30%',
//           horizontal: true,
//           startingShape: 'rounded',
//           endingShape: 'rounded'
//         }
//       },
//       fill: {
//         colors: ['#769ce3']
//       },
//       grid: {
//         show: false
//       },
//       yaxis: {
//         labels: {
//           style: {
//             fontSize: '16px',
//           }
//         },
//       },
//       xaxis: {
//         categories: [
//           '.jpeg, .png, .png',
//           '.word, .xls, .txt',
//           '.pdf',
//           '.mpeg4, .avi',
//           '.mp3',
//           '.exe',
//           'Другое'
//         ],
//         labels: {
//           show: false,
//         },
//         axisBorder: {
//           show: false,
//         },
//       },
//       title: {
//         offsetX: -10,
//         offsetY: 20,
//         text: 'Chart 12'
//       },
//       tooltip: {
//         enabled: false
//       }
//     };
//   }
// }
