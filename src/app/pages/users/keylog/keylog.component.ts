import { Observable } from 'rxjs';
import { ServerService, Keylog } from './../../../server.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
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
      console.log('resp1 ', resp);
      this.media = this.server.getKeylogForUser(resp).pipe(
        tap((resp) => {

          console.log('resp2 ', resp)
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
