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
  NbUserModule,
} from '@nebular/theme';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,  NbLayoutModule,NbActionsModule, NbCardModule,NbSelectModule, NbCalendarRangeModule,NbInputModule,  NbListModule,NbIconModule,NbFormFieldModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [AppComponent],
  imports: [
    NbActionsModule,
    BrowserModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    NbRouteTabsetModule,
    NbInputModule,
    NbSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbFormFieldModule,
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
    NbThemeModule, NbLayoutModule, NbCardModule, NbCalendarRangeModule,NbEvaIconsModule, DragDropModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
