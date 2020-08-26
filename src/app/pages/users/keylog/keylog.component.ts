import { Observable } from 'rxjs';
import { ServerService, Keylog } from './../../../server.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'ngx-keylog',
  templateUrl: './keylog.component.html',
  styleUrls: ['./keylog.component.scss']
})
export class KeylogComponent implements OnInit {

  keyLogger: string[] = [];
  media;

  constructor(private server : ServerService) { }
  ngOnInit(){
    this.server.telecast.subscribe((resp )=>{
      this.media = this.server.getKeylogForUser(resp).pipe(this.server.decodefrom64());
      // this.screenshots.subscribe(files => this.screens = files);
      // console.log(this.screens);
    })
  }

}
