import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module'
import {NbAccordionModule,NbStepperModule, NbThemeModule, NbLayoutModule,NbSidebarModule, NbSelectModule, NbUserModule, NbListModule, NbOptionModule, NbFormFieldModule, NbMenuModule,NbIconModule, NbCardModule, NbButtonModule, NbTreeGridModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';

import {DefaultComponent} from './default/default.component'
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from './users-routing.module'

import { DownloadsComponent } from './downloads/downloads.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { VideosComponent } from './videos/videos.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProxyComponent } from './proxy/proxy.component';
import { TerminalComponent } from './terminal/terminal.component';
import { KeylogComponent } from './keylog/keylog.component';
import { NgApexchartsModule } from "ng-apexcharts";

import { DocumentsTableComponent } from './viewData/table/documents.table.component';

import { DocumentsCardsComponent } from './viewData/cards/documents.cards.component';
import { Chart10Component } from './default/charts/chart10/chart10.component';
import { Chart11Component } from './default/charts/chart11/chart11.component';

@NgModule({
  imports: [
    NgApexchartsModule,
    NbAccordionModule,
    NbListModule,
    NbStepperModule,
    NbUserModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbFormFieldModule,
    ThemeModule,
    NbSidebarModule,
    NbMenuModule,
    NbThemeModule, NbLayoutModule, NbCardModule,
    NbMenuModule,
    UsersRoutingModule,
    NbListModule,
    NbButtonModule,
    NbOptionModule,
    NbUserModule,
    NbTreeGridModule,
    NbCheckboxModule,
  ],

  declarations: [
    DefaultComponent,
    UsersComponent,
    DownloadsComponent,
    ScreenshotsComponent,
    VideosComponent,
    DocumentsComponent,
    ProxyComponent,
    TerminalComponent,
    KeylogComponent,
    Chart10Component,
    Chart11Component,
    DocumentsTableComponent, DocumentsCardsComponent,
  ],
  bootstrap: [DocumentsComponent]
})
export class UsersModule {

}
