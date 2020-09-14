import { Component, ViewChild, NgModule } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { window } from 'rxjs/operators';
import { DocumentsComponent } from './documents/documents.component';

export interface folderInfo {
  folderName: string;
  extensions: string[];
  amount: string;
  totalVolume: string; 
}


@Component({
  selector: 'files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.scss'],
})
export class FilesComponent {
  
  sections: { title: string, icon: string, extension: any }[] = [
    { title: 'Все файлы', icon: 'folder-outline',     extension: '*' },
    { title: 'Документы', icon: 'file-outline',       extension: ['doc', 'pdf'] },
    { title: 'Архивы',    icon: 'archive-outline',    extension: ['zip', 'rar'] },
    { title: 'Фото',      icon: 'image-outline',      extension: ['png', 'jpeg'] },
    { title: 'Недавние',  icon: 'clock-outline',      extension: '*' },
    { title: 'Важные',    icon: 'star-outline',       extension: 'favorite' },
    { title: 'Удалённое', icon: 'trash-2-outline',    extension: 'deleted' }];
  
  active: string = 'Все файлы';
  // currentFilter: any = this.sections[0].extension;
  // @ViewChild(DocumentsComponent, {static: false})
  //  private filesComponent: DocumentsComponent;

  filterTable(section) {
    // document.location.href = 'pages/files#filesSearch'
    this.active = section.title;
    // this.currentFilter = section.extension;
  }

  constructor(private dialogService: NbDialogService) {}
  
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
      <h4>Добавление раздела</h4>
    </nb-card-header>
    <nb-card-body>
      <h6>Скрытые разделы</h6>
      <nb-list>
        <nb-list-item style="cursor: pointer;" 
          *ngFor="let section of sections">

            <nb-icon 
                style="border: none !important; color: #8f9bb3; margin-right: 1rem;" 
                icon="{{ section.icon}}"></nb-icon>
                <span>{{ section.title }}</span>

        </nb-list-item>
      </nb-list>
      <h6>Создайте собственный раздел</h6>

      <nb-select placeholder="эскиз" [(selected)]="selectedIcon">
        <nb-option *ngFor="let icon of icons" value=""><nb-icon icon="{{icon}}"></nb-icon></nb-option>
      </nb-select>
      <input nbInput type="text" id="typeName"  [placeholder]="name"/>
      <textarea>

      </textarea>
      <button (click)="addNewSection()" style='margin-bottom:5%' size='medium' nbButton hero status="info">Добавить раздел</button>
        
    </nb-card-body>
</nb-card>
  `
})
export class AddSectionComponent {

  name: string = "Название раздела";

  // Можно сделать взаимодействие между компонентами 
  // AddSectionComponent и FilesComponent 
  selectedIcon = '0';

  sections: { title: string, icon: string, extension: any }[] = [
    { title: 'Видео',     icon: 'video-outline',      extension: ['mpeg'] },
    { title: 'Аудио',     icon: 'headphones-outline', extension: ['mp3', 'wav'] },
  ];
  icons: string[] = [
    'car-outline', 'camera-outline', 
    'crop-outline', 'edit-2-outline', 
    'phone-outline', 'shopping-cart-outline'
  ];
  addNewSection() {

  }
}