import { Component } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

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
