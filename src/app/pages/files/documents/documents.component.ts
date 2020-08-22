import { ServerService, User } from './../../../server.service';
import { Component } from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbTreeGridSortService
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
    private server: ServerService) {
    server.getAllUsers();

    // Создадим рандомные данные для таблицы
    for (let i = 0; i < 30; i++) {
      this.data.push({
        data: {
          id: i,
          Номер: i,
          Название: this.makeName(),
          Дата: new showDate(),
          Пользователи: server.allusers,
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
}

// class TableUser {
//   constructor(user: User) {
//     this.user = user;
//   }
//   user: User;
//   toString() {
//     return `${this.user.first_name} ${this.user.last_name}`
//   }
// }
