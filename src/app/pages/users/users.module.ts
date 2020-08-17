import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module'
import {NbAccordionModule,NbStepperModule, NbThemeModule, NbLayoutModule,NbSidebarModule, NbSelectModule, NbInputModule, NbUserModule, NbListModule, NbOptionModule, NbFormFieldModule, NbMenuModule,NbIconModule, NbCardModule, NbButtonModule, NbTreeGridModule } from '@nebular/theme';

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

// import { Chart1Component } from '../dashboard/dashboard.module';
// import { Chart5Component } from '../dashboard/dashboard.module';

import { DocumentsTableComponent } from './table/documents.table.component';
import { DocumentsCardsComponent } from './cards/documents.cards.component';

@NgModule({
  imports: [
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

    //     Chart1Component,
    // Chart5Component
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

    DocumentsTableComponent, DocumentsCardsComponent
  ],
  bootstrap: [DocumentsComponent]
})
export class UsersModule {

}
