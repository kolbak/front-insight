import { ServerService } from "./server.service";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
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
} from "@nebular/theme";

import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbCardModule,
  NbSelectModule,
  NbCalendarRangeModule,
  NbInputModule,
  NbListModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
  NbFormFieldModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AuthGuardService } from "./auth-guard.service";
import { TokenInterceptor } from "./token.interceptor";

@NgModule({
  declarations: [AppComponent], // , UsersComponent

  imports: [
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbActionsModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    NbRouteTabsetModule,
    NbInputModule,
    NbSelectModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    NbFormFieldModule,
    NbDatepickerModule,
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbCalendarRangeModule,
    NbEvaIconsModule,

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    DragDropModule,
  ],
  providers: [
    ServerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
