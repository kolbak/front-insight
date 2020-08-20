import { Component } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';


@Component({
  selector: 'ngx-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent {

  data: FileInfo[] = [];
  constructor() { 
    this.data.push(...DataGenerator.createFileInfo(40, "screen_", ["png", "jpeg", "bmp", "gif"]));
  }


  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach() {
    this.viewTable = !this.viewTable;
  }

}
