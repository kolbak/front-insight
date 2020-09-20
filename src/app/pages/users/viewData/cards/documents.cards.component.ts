import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService, Screenshot, Media } from '../../../../server.service';
import { NbDialogService } from '@nebular/theme';


import { FileInfo } from '../data&query/data';

@Component({
  selector: 'documents-cards',
  templateUrl: 'documents.cards.component.html',
  styleUrls: ['documents.cards.component.scss']
})
export class DocumentsCardsComponent implements OnInit {

  constructor(public server : ServerService, private dialogService: NbDialogService){}

  @Input() tag: string;
  @Input() dataArr: FileInfo[];
  @Input() screenArr: Observable<Media>;
  screens: Screenshot[] = [];

  ngOnInit() {
    this.screenArr.subscribe(files => {
      this.screens.push(...files.files);
    });
  }
  DateWithFormat(date: string):string {
    return new Intl.DateTimeFormat('ru').format(new Date(date));
  }

  viewCloser(link) {
    if (screen.width > 1050) 
        this.dialogService.open(ShowPicture, { context: { link: link, tag: this.tag }, });
  }
}


@Component({
  selector: 'show-picture',
  template: `<h3 style="color: white; text-align: center;">{{fileName}}</h3>
  <img *ngIf="tag == 'img'" [src]="server.HOST + link">
  <video *ngIf="tag == 'video'" [src]="server.HOST + link">
  `
})
export class ShowPicture implements OnInit{
  constructor(public server : ServerService){
  }

  ngOnInit(): void {
    this.fileName = this.link.split('/')[this.link.split('/').length - 1] 
  }
  fileName: string;
  link: string;
  tag: string;
}
