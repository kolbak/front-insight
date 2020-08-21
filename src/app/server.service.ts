import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  allusers:any = ""
  public HOST = "http://localhost:4200/api";
  constructor(private http : HttpClient) { }
  getAllUsers(){
    this.http.get(this.HOST+"/users").subscribe((response)=>{
this.allusers = response
    })
  }
}
