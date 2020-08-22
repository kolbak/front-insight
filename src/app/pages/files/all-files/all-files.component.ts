
import { Component } from '@angular/core';

export interface folderInfo {
  folderName: string;
  extensions: string[];
  amount: string;
  totalVolume: string; 
}


@Component({
  selector: 'ngx-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent {  

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
  folderNames: string[] = ["Архивы", "Word файлы", "Excel файлы", "Pdf файлы", "Фото", "Музыка",
  "Архивы", "Word файлы", "Excel файлы", "Pdf файлы", "Фото", "Музыка"]

  constructor() { 
    for (let i = 0; i < this.folderNames.length; i++) {
      this.files.push({
        folderName: this.folderNames[i],
        extensions: this.extensions[i],
        amount: `${Math.floor(Math.random()*1000)}`, 
        totalVolume:`${Math.floor(Math.random()*1000)}`
      })
      
    }
  }

}