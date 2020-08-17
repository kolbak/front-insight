import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-keylog',
  templateUrl: './keylog.component.html',
  styleUrls: ['./keylog.component.scss']
})
export class KeylogComponent implements OnInit {

  keyLogger: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.keyLogger.push(`${i}`);
    }
    // Здесь должна быть логика запроса на сервер
  }

}
