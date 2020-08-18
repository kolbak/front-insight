import { Component } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  makeName(prefix: string) {
      // var text = "file_";
      var variants = "abcdefghijklmnopqrstuvwxyz";
  
      for( var i = 0; i < 7; i++ )
        prefix += variants.charAt(Math.floor(Math.random() * variants.length));
  
      return prefix;
  }
  randomDate(start:Date, end:Date) {
    return new Date(start.getTime() 
            + Math.random() * (end.getTime() - start.getTime()));
  }
  data: FileInfo[] = [];
  constructor() { 
    this.data.push(...DataGenerator.createFileInfo(30, "document", ["doc", "json", "xlsx"]));
  }


  
  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach() {
    this.viewTable = !this.viewTable;
  }
}
