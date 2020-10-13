import { ServerService } from './server.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // isAuth: Observable<boolean>
  constructor(private server: ServerService,
              private router: Router) { 
    // this.server.IsAuthored.subscribe((resp) => this.isAuth = resp)
    let status = server.getUserStatus();
    this.server.IsAuthored.next(status);
  }

  canActivate() {
    return this.server.IsAuthored
      .pipe(
        tap(authenticated => {
          if(!authenticated){
            this.router.navigate(['auth/login']);
          }
        })
      );
  }
}
