
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent {  

  constructor() { }

  files: string[] = ["png", "jpeg", "bmp", "doc", "json", "exe", "gif", "xlsx"];
}