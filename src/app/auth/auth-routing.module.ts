import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    // component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
