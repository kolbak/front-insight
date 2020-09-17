import { Input, Component, OnInit, Inject } from '@angular/core';

import { Media } from '../../../../server.service';
import { FileInfo } from '../data&query/data';

import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NB_WINDOW, NbMenuService, NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { ShowPicture } from '../cards/documents.cards.component';

interface TreeNode<T> {
  data: T;
}

interface FSEntry {
  link: string;
  checkbox: boolean;
  Название: string;
  Размер: string;
  Дата: Date;
  tableDate: string;
  Владелец: string;
  Просмотренные: boolean;
  Действия: string;
}

@Component({
  selector: 'documents-table',
  templateUrl:'documents.table.component.html',
  styleUrls: ['documents.table.component.scss']
})
export class DocumentsTableComponent implements OnInit{

    //-----------------------------------Чекбокс
    setCheckedStatus(row, $checked) {
      //this.checked = checked.target.checked;
      row.data['checkbox'] = $checked.target.checked;
      this.checkBoxsetAll = false;
    }
    // Настройка чекбокса для выделения всего
    checkBoxsetAll: boolean = false;
    checkAll($checked) {
      for (const iterator of this.data) {
        iterator.data.checkbox = $checked.target.checked;
      }
      this.checkBoxsetAll = $checked.target.checked;
      this.dataSource.setData(this.data);
    }


  @Input() dataArr: FileInfo[];
  @Input() screenArr: Observable<Media>;

  // Настройки таблицы
  fileNameColumn = 'Название';
  volumeColumn = 'Размер'
  dateColumn = 'tableDate';
  viewedColumn = 'Просмотренные';
  visibleDateColumn = 'Дата';
  usersColumn = 'Владелец';
  actionColumn = 'Действия';

  allColumns = [this.fileNameColumn, this.dateColumn, this.volumeColumn, this.visibleDateColumn, this.usersColumn, this.viewedColumn, this.actionColumn];

  screenWidth: number = screen.width;
  showViewed: boolean = screen.width > 925;
  showOwners: boolean = screen.width > 850;

  onResize() {
    this.screenWidth = screen.width;
    
    this.allColumns =                              [this.fileNameColumn, this.dateColumn, this.volumeColumn, this.visibleDateColumn, this.usersColumn, this.viewedColumn, this.actionColumn];
    if (this.screenWidth <= 925) this.allColumns = [this.fileNameColumn, this.dateColumn, this.volumeColumn, this.visibleDateColumn, this.usersColumn, this.actionColumn];  
    if (this.screenWidth <= 850) this.allColumns = [this.fileNameColumn, this.dateColumn, this.volumeColumn, this.visibleDateColumn, this.actionColumn]; 

    this.showViewed = this.screenWidth > 925;
    this.showOwners = this.screenWidth > 850;
  }
  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  private data: TreeNode<FSEntry>[] = [];

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window, private dialogService: NbDialogService) { 

    if (this.screenWidth <= 925) this.allColumns = [this.fileNameColumn, this.dateColumn, this.volumeColumn, this.visibleDateColumn, this.usersColumn, this.actionColumn];  
    if (this.screenWidth <= 850) this.allColumns = [this.fileNameColumn, this.dateColumn, this.volumeColumn, this.visibleDateColumn, this.actionColumn];   
  }

  // Получаем данные
  ngOnInit() {
    if (this.dataArr.length != 0) {
      for (let i = 0; i < this.dataArr.length; i++) {
        this.data.push({
          data:{
            link: '',
            checkbox: false,
            Название: this.dataArr[i].name,
            Размер:   this.dataArr[i].size,
            Дата:     this.dataArr[i].date,
            tableDate: new Intl.DateTimeFormat('ru').format(this.dataArr[i].date),
            Просмотренные: false, //Math.random()*2 > 1 ? true : false,
            Владелец: '',
            Действия: ''
        }});
      }
      this.dataSource = this.dataSourceBuilder.create(this.data);
    } else {
      this.screenArr.subscribe(screens => {
        for (let i = 0; i < screens.files.length; i++) {
          this.data.push({
            data:{
              link: screens.files[i].link,
              checkbox: false,
              Название: screens.files[i].name,
              Размер:   `${screens.files[i].size}кб`,
              Дата:   new Date(screens.files[i].timestamp),
              tableDate: screens.files[i].timestamp,
              Просмотренные: false,//Math.random()*2 > 1 ? true : false,
              Владелец: '',
              Действия: ''
          }});
        }
        this.dataSource = this.dataSourceBuilder.create(this.data);
      })
    }
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


  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  viewCloser(link) {
    console.log('Стоп', link);
    if (link['link'] == '') {
      return;
    }
    this.dialogService.open(ShowPicture, { context: { link: link['link'], }, });
  }
}
