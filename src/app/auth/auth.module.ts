import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
// import { NbAuthModule, NbPasswordAuthStrategy } from "@nebular/auth";
// import {
//   NbAlertModule,
//   NbButtonModule,
//   NbCheckboxModule,
//   NbInputModule,
// } from "@nebular/theme";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  // bootstrap: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // NbAlertModule,
    // NbInputModule,
    // NbButtonModule,
    // NbCheckboxModule,

    AuthRoutingModule,

    // NbAuthModule.forRoot(),
  ],
})
export class AuthModule {}
