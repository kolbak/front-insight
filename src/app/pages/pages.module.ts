import { NgModule } from '@angular/core';
import { NbMenuModule, NbButtonModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FilesComponent, FsIconComponent } from './files/files.component';
import { NbIconModule, NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbButtonModule,
    DashboardModule, 
    
    NbTreeGridModule, NbIconModule, NbCardModule
  ],
  declarations: [
    PagesComponent, FilesComponent, FsIconComponent
  ],
})
export class PagesModule {
}
