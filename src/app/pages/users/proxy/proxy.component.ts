import { ServerService } from './../../../server.service';
import { Component, OnInit } from '@angular/core';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent implements OnInit {

  proxyHistory: string[] = [];

  media: any;

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    // this.server.telecast.subscribe((resp) => {
    //   console.log('resp1 ', resp);
    //   this.media = this.server.getProxy(resp).pipe(
    //     tap((resp) => {

    //       console.log('resp2 ', resp)
    //     })
    //     // this.server.decodefrom64(resp)
    //   )
    // })
  }
    // for (let i = 0; i < 10; i++) {
      // this.proxyHistory.push(`${i}`);
    // }
  //   this.server.telecast.subscribe((resp)=>{
  //     this.media = this.server.getKeylogForUser(resp).pipe(
  //       tap((_resp) => {
  //         console.log(_resp);
  //         // console.log(atob(resp));
  //         // this.server.decodefrom64(resp)
  //       }),
  //       mapTo(true),
  //       catchError((error) => {
  //         // console.log(error);
  //         return of(false);
  //       })
  //     // this.screenshots.subscribe(files => this.screens = files);
  //     )
  //   // Здесь должна быть логика запроса на сервер
  //   }
  // }
}