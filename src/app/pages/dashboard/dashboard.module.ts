import { NgModule } from '@angular/core';
import { NbCardModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {ChartjsBarComponent} from './bar/chartjs-bar.component';
import { ChartModule } from 'angular2-chartjs';
import { NbThemeModule, NbLayoutModule, NbCalendarRangeModule } from '@nebular/theme';
import { CalendarRangeShowcaseComponent } from './calendar-range-showcase/calendar-range-showcase.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartModule, 
    NbThemeModule, 
    NbLayoutModule, 
    NbCalendarRangeModule,
    NbEvaIconsModule 
  ],
  declarations: [
    DashboardComponent,
    ChartjsBarComponent,
    CalendarRangeShowcaseComponent
  ],
  exports: [CalendarRangeShowcaseComponent]
})
export class DashboardModule {
  constructor() {}
}
