import { ServerService, User } from './../../../server.service';
import { Component, Inject, OnInit  } from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbDialogService,
  NB_WINDOW,
  NbMenuService
} from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

// import {   } from '';
// import { User } from '../../../@core/data/users';
// import { ServerService } from '../../../'

class showDate {
  constructor() {
    this.date = this.randomDate(new Date(2012, 0, 1), new Date());
  }
  date: Date;

  randomDate(start: Date, end: Date) {
    return new Date(start.getTime()
      + Math.random() * (end.getTime() - start.getTime()));
  }

  compare(d2: showDate) {
    return this.date > d2.date ? 1 : this.date < d2.date ? -1 : 0;
  }

  toString() { return new Intl.DateTimeFormat('ru').format(this.date) }
}

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  id: Number;
  checkbox: boolean;
  Номер: Number;
  Название: [string, string];
  Дата: Date;
  tableDate: string;
  Пользователи: User[];
  Действия: string;
}

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  // Настройки чек-бокса внутри первой колонки
  //checked: boolean = false;
  setCheckedStatus(row, $checked) {
    //this.checked = checked.target.checked;
    row.data['checkbox'] = $checked.target.checked;
    this.checkBoxsetAll = false;
  }
  // Настройка чекбокса для выделения всего
  checkBoxsetAll: boolean = false;
  checkAll($checked) 
  {
    for (const iterator of this.data) {
      iterator.data.checkbox = $checked.target.checked;
    }
    this.checkBoxsetAll = $checked.target.checked;
    this.dataSource.setData(this.data);
  }


  // Настройки таблицы
  fileNameColumn = 'Название';
  dateColumn = 'tableDate';
  visibleDateColumn = 'Дата';
  usersColumn = 'Пользователи';
  actionColumn = 'Действия';
  allColumns = [this.fileNameColumn, this.dateColumn, this.visibleDateColumn, this.usersColumn, this.actionColumn];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  makeName() {
    var text = "file_";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  randomDate(start: Date, end: Date) {
    return new Date(start.getTime()
      + Math.random() * (end.getTime() - start.getTime()));
  }


  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    public server: ServerService, 
    private dialogService: NbDialogService, 
    private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window) {

    let userArr, tableDate: Date, fileName: string, fileIconSrc: string, ext:string, extensions: string = ['PDF', 'PPT', 'PSD'].join('');
    server.getAllUsers().subscribe(users => userArr = users);
    console.log('userArr :>> ', userArr);
    // Создадим рандомные данные для таблицы
    for (let i = 0; i < 30; i++) {
      tableDate = this.randomDate(new Date(2012, 0, 1), new Date());
      fileName = this.makeName() + '.pdf';
      fileIconSrc = '../../../../assets/images/ext_icons/ext_icon_';

      if (fileName.split('.').length > 0 && extensions.includes(fileName.split('.')[fileName.split('.').length - 1].toLocaleUpperCase())) {
        fileIconSrc += fileName.split('.')[fileName.split('.').length - 1].toLocaleUpperCase() + '.svg';
      } else {
        fileIconSrc += 'unknown.svg';
      }

      this.data.push({
        data: {
          id: i,
          checkbox: false,
          Номер: i,
          Название: [fileIconSrc, fileName],
          Дата: tableDate,
          tableDate: new Intl.DateTimeFormat('ru').format(tableDate),
          Пользователи: userArr,
          Действия: ""
        },
      });

    }
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [];



  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  open(user) {
    this.dialogService.open(ShowUserDataComponent, { context: { user: user, }, });
  }

  deleteHighlightFiles()
  {
    this.data = this.data.filter(d => !d.data.checkbox);
    this.dataSource.setData(this.data);
    this.checkBoxsetAll = false;
  }

  //----------------------------------------Меню действий
  items = [
    { title: 'Скачать' },
    { title: 'Удалить' }
  ];
  // Здесь какая-то менюха с файлами
  // + надо разобарться, как удалять.
  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {console.log(title); this.window.alert(`${title} was clicked!`)});
  }

}

@Component({
  selector: 'show-user',
  template: `
  <nb-card style="width: 20vw; height: 50vh">
    <nb-card-header>
    <!-- <img [src]="server.HOST + user.photo" alt="Работник"> -->

      <nb-user size="giant" [name]="user.last_name + ' ' + user.first_name + ' ' + user.middle_name" [title]="user.role" [picture]="server.HOST + user.photo">
      </nb-user>
    </nb-card-header>
    <nb-card-body>
      Компания: {{user.company}}<br>
      Сектор: {{user.sector}}<br>
    </nb-card-body>
    <nb-card-footer>
      <a href="/pages/users/default">Подробнее</a>
    </nb-card-footer>
</nb-card>
  `
})
export class ShowUserDataComponent {
  constructor(public server: ServerService) {
  }
  user: User;
}