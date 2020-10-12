import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ServerService } from './../../server.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OnDestroy } from '@angular/core';

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isAuth: boolean = false
  constructor(private server: ServerService,
              private router: Router) {
    let status = server.getUserStatus();
    this.server.IsAuthored.next(status);
    if(status){
      this.isAuth = status;
    }
  }

  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  // ngOnDestroy(): void {
  //   if(this.sub){ this.sub.unsubscribe() }
  // }

  sub: Subscription
  onSubmit(e: any) {
    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
    }

    if(this.server.getJwtToken()){
      this.router.navigate(['pages/dashboard'])
    } else {
      this.server.login(user).subscribe((resp) => {
        if(resp){
          this.router.navigate(['pages/dashboard'])
        }
      });
    }
  }
}
