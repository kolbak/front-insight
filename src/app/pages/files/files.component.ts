import { Component} from '@angular/core';
import { MENU_ITEMS } from './files-menu';
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.scss'],
})
export class FilesComponent {
  
  constructor(private dialogService: NbDialogService) {}
  
  menu = MENU_ITEMS;
  // Для отображения "Объём данных"
  dataContains = 155;
  dataTotal    = 256; 

  addSection(){
    this.dialogService.open(AddSectionComponent, { context: { }, });
  }

}

@Component({
  selector: 'files-add-section',
  template: `
  <nb-card style="width: 20vw; height: 50vh">
    <nb-card-header>
    <!-- <img [src]="server.HOST + user.photo" alt="Работник"> -->
      Добавьте раздел
    </nb-card-header>
    <nb-card-body>
    <!-- <input type="text" [(ngModel)]="name" /> Не работает [(ngModel)] какого чёрта? -->
    <p> {{name}}</p>
    <input nbInput type="text" [placeholder]="name"/>
    </nb-card-body>
    <nb-card-footer>

    </nb-card-footer>
</nb-card>
  `
})
export class AddSectionComponent {
  constructor() {
  }
  name: string = "Название раздела";

}