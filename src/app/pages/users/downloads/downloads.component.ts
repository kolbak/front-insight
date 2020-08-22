import { Component } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';
import { folderInfo } from '../../files/all-files/all-files.component';

@Component({
  selector: 'ngx-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent  {

  files: folderInfo[] = [];
  extensions: string[][] = [
    ["zip", "rar"], 
    ["doc"], 
    ["xlsx"],
    ["pdf"],
    ["png", "jpeg", "bmp", "gif"],
    ["mp3", "wav"] ,
    ["zip", "rar"], 
    ["doc"], 
    ["xlsx"],
    ["pdf"],
    ["png", "jpeg", "bmp", "gif"],
    ["mp3", "wav"] 
  ];
  folderNames: string[] = ["Архивы", "Word файлы", "Excel файлы", "Pdf файлы", "Фото", "Музыка"];

  data: FileInfo[] = [];
  constructor() { 
    this.data.push(...DataGenerator.createFileInfo(30, "file_", ["png", "jpeg", "bmp", "doc", "json", "exe", "gif", "xlsx"]));
    
    for (let i = 0; i < this.folderNames.length; i++) {
      this.files.push({
        folderName: this.folderNames[i],
        extensions: this.extensions[i],
        amount: `${Math.floor(Math.random()*1000)}`, 
        totalVolume:`${Math.floor(Math.random()*1000)}`
      })
      
    }
  }


  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach(viewTable: boolean) {
    this.viewTable = viewTable;
  }
}
