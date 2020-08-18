import { Input, Component, OnInit } from '@angular/core';

import { FileInfo } from '../data&query/data';

@Component({
  selector: 'documents-cards',
  templateUrl: 'documents.cards.component.html',
  styleUrls: ['documents.cards.component.scss']
})
export class DocumentsCardsComponent implements OnInit {

  @Input() dataArr: FileInfo[];

  dataArrBy4: FileInfo[][];

  constructor() { }

  // Разделяю dataArr по 4
  // При масштабировании по 2
  ngOnInit() {
    this.dataArrBy4 = [];

    for (let i = 0, j = 0; i < this.dataArr.length; i++) {
      if (i % 4 == 0) { 
        this.dataArrBy4[++j] = [];
      }
      this.dataArrBy4[j].push(this.dataArr[i]);
    }
  }
}
