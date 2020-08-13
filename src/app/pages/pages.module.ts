import { NgModule } from '@angular/core';
import {  NbMenuModule, NbButtonModule, NbTreeGridModule,NbProgressBarModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FilesModule} from './files/files.module';
import { NbIconModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { UsersModule } from './users/users.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,NbProgressBarModule ,
    NbMenuModule,
    NbButtonModule,
    DashboardModule, 
    FilesModule,
    UsersModule,
    NbTreeGridModule, NbIconModule, NbCardModule, NbCheckboxModule
  ],
  declarations: [
    PagesComponent,
    

  ],
})
export class PagesModule {
}
