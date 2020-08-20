import { Component } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';

@Component({
  selector: 'ngx-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent  {

  data: FileInfo[] = [];
  constructor() { 
    this.data.push(...DataGenerator.createFileInfo(30, "file_", ["png", "jpeg", "bmp", "doc", "json", "exe", "gif", "xlsx"]));
  }


  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach(viewTable: boolean) {
    this.viewTable = viewTable;
  }
}
