import { Component} from '@angular/core';
import { MENU_ITEMS } from './files-menu';


@Component({
  selector: 'files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.scss'],
})
export class FilesComponent {
  // Для поиска
 
  menu = MENU_ITEMS;
  // Для отображения "Объём данных"
  dataContains = 155;
  dataTotal    = 256; 


}



// <!-- <nb-icon icon="file-text-outline"></nb-icon> -->