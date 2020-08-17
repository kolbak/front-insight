import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent implements OnInit {

  proxyHistory: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.proxyHistory.push(`${i}`);
    }
    // Здесь должна быть логика запроса на сервер
  }
}
