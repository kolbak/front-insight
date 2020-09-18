import { ServerService } from './../../../server.service';
import { Component, OnInit } from '@angular/core';

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
    for (let i = 0; i < 10; i++) {
      this.proxyHistory.push(`${i}`);
    }
    this.server.telecast.subscribe((resp )=>{
      this.media = this.server.getKeylogForUser(resp).pipe(this.server.decodefrom64());
      // this.screenshots.subscribe(files => this.screens = files);
      // console.log(this.screens);
    })
    // Здесь должна быть логика запроса на сервер
  }
}
