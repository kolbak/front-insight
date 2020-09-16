import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';


export interface folderInfo {
  folderName: string;
  extensions: string[];
  amount: string;
  totalVolume: string; 
}
interface Section { 
  title: string, 
  icon: string, 
  extension: any 
}

@Component({
  selector: 'files',
  templateUrl: 'files.component.html',
  styleUrls: ['files.component.scss'],
})
export class FilesComponent {
  
  // Смена активного раздела во время сортировки таблицы
  active: string = 'Все файлы';
  filterTable(section) {
    this.active = section.title;
  }

  constructor(private dialogService: NbDialogService) {
    for (let i = 0; i < this.sections.length; i++)
      this.deleteMode.push(false);  
  }
  
  // Для отображения "Объём данных"
  dataContains = 155;
  dataTotal    = 256; 


  // __________________ разделы __________________ \\
  deleteMode: boolean[] = [];
  selectedIcon = '0';
  sectionsHide: Section[] = [
    { title: 'Видео',      icon: 'video-outline',      extension: ['mpeg', 'avi', 'mp4'] },
    { title: 'Фотографии', icon: 'image-outline',      extension: ['png', 'jpeg', 'bmp', 'git', 'tif'] },
    { title: 'Аудио',      icon: 'headphones-outline', extension: ['mp3', 'wav'] },
    { title: 'Книги',      icon: 'book-open-outline',  extension: ['fb2', 'epub', 'mobi'] },

  ];
  sections: Section[] = [
    { title: 'Все файлы',  icon: 'folder-outline',     extension: '*' },
    { title: 'Документы',  icon: 'file-outline',       extension: ['doc', 'txt', 'docx', 'pdf'] },
    { title: 'Таблицы',    icon: 'layout-outline',     extension: ['xls', 'xlsx'] },
    { title: 'Презентации',icon: 'pie-chart-outline',  extension: ['ppt', 'pptx'] },
    
    { title: 'Архивы',     icon: 'archive-outline',    extension: ['zip', 'rar', '7z', 'gzip'] },
    { title: 'Недавние',   icon: 'clock-outline',      extension: '*' },
    { title: 'Важные',     icon: 'star-outline',       extension: 'favorite' },
    { title: 'Удалённое',  icon: 'trash-2-outline',    extension: 'deleted' }
  ];

  // icons: string[] = [
  //   'car-outline', 'camera-outline', 
  //   'crop-outline', 'edit-2-outline', 
  //   'phone-outline', 'shopping-cart-outline',
  //   'email-outline', 'layout-outline'
  // ];
  extensions: string[] = ['']

  // AddExtenstion(id) {
  //   console.log((document.querySelector('#ext' + id) as HTMLInputElement).value);

  //   if (id + 1 == this.extensions.length) {
  //     this.extensions.push((document.querySelector('#ext' + id) as HTMLInputElement).value);
  //   }
  //   else this.extensions[id] = (document.querySelector('#ext' + id) as HTMLInputElement).value;
  //   console.log(this.extensions);
  // }

  hideSection(id) {
    this.sectionsHide.push(this.sections[id]);
    this.sections.splice(this.sections.lastIndexOf(this.sections[id]), 1);
    this.filterTable(this.sections[id]);
  }

  addSectionDialog: any;
  addSection(sect: Section) {
    // Закрываем форму
    this.addSectionDialog.close();
    // Удаляем из Hide
    this.sectionsHide.splice(this.sectionsHide.lastIndexOf(sect), 1);
    // Добавляем в активные разделы
    this.sections.push(sect);
  }
  open(dialog: TemplateRef<any>) {
    this.addSectionDialog =  this.dialogService.open(dialog, { context: {} });
  }
}