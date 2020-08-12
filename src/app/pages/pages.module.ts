import { NgModule } from '@angular/core';
import { NbMenuModule,NbButtonModule, } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbButtonModule,
    DashboardModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
