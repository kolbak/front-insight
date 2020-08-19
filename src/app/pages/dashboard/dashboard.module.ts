import { NgModule } from '@angular/core';
import { NbCardModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import { NbThemeModule, NbLayoutModule, NbCalendarRangeModule } from '@nebular/theme';
import { CalendarRangeShowcaseComponent } from './calendar-range-showcase/calendar-range-showcase.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
//charts
import { Chart1Component } from './charts/chart1/chart1.component';
import { Chart2Component } from './charts/chart2/chart2.component';
import { Chart3Component } from './charts/chart3/chart3.component';
import { Chart4Component } from './charts/chart4/chart4.component';
import { Chart5Component } from './charts/chart5/chart5.component';
import { Chart6Component } from './charts/chart6/chart6.component';
import { Chart7Component } from './charts/chart7/chart7.component';
import { Chart8Component } from './charts/chart8/chart8.component';
import { ChartjsBarComponent } from './charts/chartjs-bar.component';
import { Chart9Component } from './charts/chart9/chart9.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartModule, 
    NbThemeModule, 
    NbLayoutModule, 
    NbCalendarRangeModule,
    NbEvaIconsModule,
    NgxEchartsModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  declarations: [
    DashboardComponent,
    ChartjsBarComponent,
    CalendarRangeShowcaseComponent,
    Chart1Component,
    Chart5Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
    Chart6Component,
    Chart7Component,
    Chart8Component,
    Chart9Component
  ],
  exports: [CalendarRangeShowcaseComponent, 
    Chart1Component,
    Chart5Component]
})
export class DashboardModule {
  constructor() {}
}
