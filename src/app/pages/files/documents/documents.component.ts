import { ServerService, User } from './../../../server.service';
import { Component, TemplateRef  } from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbTreeGridSortService,
  NbDialogService
} from '@nebular/theme';

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
  sort() {

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
  Номер: Number;
  Название: string;
  Дата: showDate;
  Пользователи: User[];
  Действия: Object;
}

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  // Настройки чек-бокса внутри первой колонки
  checked: boolean = false;
  setCheckedStatus(checked) {
    this.checked = checked.target.checked;
  }


  // Настройки таблицы
  customColumn = 'Название';
  dateColumn = 'Дата';
  usersColumn = 'Пользователи';
  defaultColumn = 'Действия';
  allColumns = [this.customColumn, this.dateColumn, this.usersColumn, this.defaultColumn];

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

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private sortService: NbTreeGridSortService<FSEntry>,
    public server: ServerService, 
    private dialogService: NbDialogService) {

    let userArr;
    server.getAllUsers().subscribe(users => userArr = users);
    console.log('userArr :>> ', userArr);
    // Создадим рандомные данные для таблицы
    for (let i = 0; i < 30; i++) {
      this.data.push({
        data: {
          id: i,
          Номер: i,
          Название: this.makeName(),
          Дата: new showDate(),
          Пользователи: userArr,
          Действия: { toString() { return "..." } }
        },
      });

    }
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  // sortService.comparator(){}


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