import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {ChartjsBarComponent} from './bar/chartjs-bar.component';
import { ChartModule } from 'angular2-chartjs';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    ChartjsBarComponent
  ],
})
export class DashboardModule {
  constructor() {}
}
