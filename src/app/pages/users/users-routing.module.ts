import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {UsersComponent} from './users.component'
import {DefaultComponent} from './default/default.component'
import { DownloadsComponent } from './downloads/downloads.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { VideosComponent } from './videos/videos.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProxyComponent } from './proxy/proxy.component';
import { TerminalComponent } from './terminal/terminal.component';
import { KeylogComponent } from './keylog/keylog.component';
const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
        path: 'keylog',
        component: KeylogComponent,
      },
    {
        path: 'videos',
        component: VideosComponent,
      },
    {
        path: 'terminal',
        component: TerminalComponent,
      },
    {
        path: 'screenshots',
        component: ScreenshotsComponent,
      },
    {
        path: 'proxy',
        component: ProxyComponent,
      },
    {
        path: 'downloads',
        component: DownloadsComponent,
      },
    {
        path: 'documents',
        component: DocumentsComponent,
      },
    {
      path: 'default',
      component: DefaultComponent,
    },
    {
      path: '',
      redirectTo: 'default',
      pathMatch: 'full',
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
