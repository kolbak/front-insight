import { NgModule } from '@angular/core';
import { NbCardModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {ChartjsBarComponent} from './bar/chartjs-bar.component';
import { ChartModule } from 'angular2-chartjs';
import { NbThemeModule, NbLayoutModule, NbCalendarRangeModule } from '@nebular/theme';
import { CalendarRangeShowcaseComponent } from './calendar-range-showcase/calendar-range-showcase.component';

import { D3BarComponent } from './d3/d3-bar.component';
import { D3LineComponent } from './d3/d3-line.component';
import { D3PieComponent } from './d3/d3-pie.component';
import { D3AreaStackComponent } from './d3/d3-area-stack.component';
import { D3PolarComponent } from './d3/d3-polar.component';
import { D3AdvancedPieComponent } from './d3/d3-advanced-pie.component';
import { D3Component } from './d3/d3.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from './pie-chart/pie-chart.component';

//charts
import { Chart1Component } from './charts/chart-1/chart-1.component';
import { Chart5Component } from './charts/chart-5/chart-5.component';

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
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    ChartjsBarComponent,
    CalendarRangeShowcaseComponent,
    D3BarComponent,
    D3LineComponent,
    D3PieComponent,
    D3AreaStackComponent,
    D3PolarComponent,
    D3AdvancedPieComponent,D3Component,
    PieChartComponent,
    Chart1Component,
    Chart5Component
  ],
  exports: [CalendarRangeShowcaseComponent]
})
export class DashboardModule {
  constructor() {}
}
