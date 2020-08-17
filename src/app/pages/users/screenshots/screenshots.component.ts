import { Component, OnInit } from '@angular/core';

import { FileInfo } from '../documents/documents.component';


@Component({
  selector: 'ngx-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent {
  makeName() {
    var text = "file_";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i = 0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  randomDate(start:Date, end:Date) {
    return new Date(start.getTime() 
            + Math.random() * (end.getTime() - start.getTime()));
  }
  data: FileInfo[] = [];
  constructor() { 
    for (let i = 0; i < 10; i++) {
      this.data.push(new FileInfo(
        this.makeName(), 
        this.randomDate(new Date(2012, 0, 1), new Date()), 
        `${Math.random()*100}mb`));
    }
  }



  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach() {
    this.viewTable = !this.viewTable;
  }

}
