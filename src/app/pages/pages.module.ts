import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
