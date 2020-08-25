import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService, Screenshot, Screenshots } from '../../../../server.service';


import { FileInfo } from '../data&query/data';

@Component({
  selector: 'documents-cards',
  templateUrl: 'documents.cards.component.html',
  styleUrls: ['documents.cards.component.scss']
})
export class DocumentsCardsComponent implements OnInit {

  constructor(public server : ServerService){
  }
  @Input() dataArr: FileInfo[];
  @Input() screenArr: Observable<Screenshots>;
  screens: Screenshot[] = [];

  ngOnInit() {
    this.screenArr.subscribe(files => {
      this.screens.push(...files.files);
    })
  }
}
