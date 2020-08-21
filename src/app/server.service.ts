import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class User {
  uuid: string;
  company: string;
  sector: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  full_name: string;
  private _photo: string = "";
  get photo(): string {
    return this._photo;
  }
  set photo(value: string) {
    this._photo = ServerService.HOST + value;
    console.log(this._photo);
  }
  role: string;
}
@Injectable({
  providedIn: "root",
})
export class ServerService {
  allusers: [User];
  public HOST = "http://localhost:4200/api";
  static HOST: string = "http://localhost:4200/api";
  constructor(private http: HttpClient) {}

  getAllUsers() {
    this.http.get(this.HOST + "/users").subscribe((response: [User]) => {
      this.allusers = response;
    });
  }

  
}
