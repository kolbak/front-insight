import { Observable, of } from 'rxjs';
import { ServerService, Keylog } from './../../../server.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { from } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
@Component({
  selector: 'ngx-keylog',
  templateUrl: './keylog.component.html',
  styleUrls: ['./keylog.component.scss']
})
export class KeylogComponent implements OnInit {

  keyLogger: string[] = [];
  media;

  constructor(private server : ServerService) { }
  
  ngOnInit(): void {
    this.server.telecast.subscribe((resp) => {
      console.log('resp1 keylog uuid', resp);
      this.media = this.server.getKeylogForUser(resp).pipe(
        tap((resp) => {
          console.log('resp2 keylog ', resp)
        }),
        mapTo(true),
        catchError((error) => {
          console.log('keylog error >> ', error);
          return of(false);
        })
        // this.server.decodefrom64(resp)
      )
    })
  }
  // ngOnInit(){
  //   // this.server.telecast.subscribe((resp )=>{
  //   //   this.media = this.server.getKeylogForUser(resp).pipe(this.server.decodefrom64(resp));
  //   //   // this.screenshots.subscribe(files => this.screens = files);
  //   // })
  // }

}
