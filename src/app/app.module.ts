import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbRouteTabsetModule,
} from '@nebular/theme';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbCalendarRangeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FilesComponent } from './pages/files/files.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [AppComponent, FilesComponent, UsersComponent],
  imports: [
    BrowserModule,
    NbRouteTabsetModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbDatepickerModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbThemeModule, NbLayoutModule, NbCardModule, NbCalendarRangeModule,NbEvaIconsModule, DragDropModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
