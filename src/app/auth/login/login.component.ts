import { ServerService } from './../../server.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private server: ServerService) {}

  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit(e: any) {
    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
    }

    this.server.login(user).subscribe((resp) => console.log(resp));
    console.log(user);
  }
}
