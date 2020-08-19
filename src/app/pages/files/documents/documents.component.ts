import { Component } from '@angular/core';
import { 
  NbSortDirection, 
  NbSortRequest, 
  NbTreeGridDataSource, 
  NbTreeGridDataSourceBuilder,
  NbTreeGridSortService } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Название: string;
  Дата: Object;
  Пользователи: Object;
  Действия: Object;
}

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent  {

  // Настройки чек-бокса внутри первой колонки
  checked:boolean = false;
  setCheckedStatus(checked) {
    this.checked = checked.target.checked;
  }


  // Настройки таблицы
  customColumn = 'Название';
  defaultColumns = ['Дата', 'Пользователи', 'Действия'];
  allColumns = [this.customColumn, ...this.defaultColumns];

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
    private sortService: NbTreeGridSortService<FSEntry>) { 
       // Создадим рандомные данные для таблицы
    for (let i = 0; i < 100; i++) {
      this.data.push({
        data: {
          Название: this.makeName(),
          Дата: { 
            date: this.randomDate(new Date(2012, 0, 1), new Date()), 
            toString() { return new Intl.DateTimeFormat('ru').format(this.date) } 
          },
          Пользователи: {},
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

  private data: TreeNode<FSEntry>[] = [
    // {
    //   data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
    //   children: [
    //     { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
    //     { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
    //     {
    //       data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
    //       children: [
    //         { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
    //         { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
    //         { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
    //       ],
    //     },
    //     { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
    //   ],
    // },
    // {
    //   data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
    //   children: [
    //     {
    //       data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
    //       children: [
    //         { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
    //       ],
    //     },
    //     {
    //       data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
    //       children: [
    //         { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
    //         { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //   children: [
    //     { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //     { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //   ],
    // },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}
