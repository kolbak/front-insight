import { Observable } from 'rxjs';
import { ServerService, Screenshot, Media } from './../../../server.service';
import { Server } from 'http';
import { Component, OnInit } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';
import { async } from '@angular/core/testing';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'ngx-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent implements OnInit {

  media : Observable<Media>;
  data: FileInfo[] = [];
  // screens: Screenshots;

  constructor(private server: ServerService) {
    this.data.push(...DataGenerator.createFileInfo(40, "screen_", ["png", "jpeg", "bmp", "gif"]));
  }

ngOnInit(){
  this.server.telecast.subscribe((resp )=>{
    this.media = this.server.getScreenShotsForUser(resp);
    // this.screenshots.subscribe(files => this.screens = files);
    // console.log(this.screens);
  })
}
  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach(viewTable: boolean) {
    this.viewTable = viewTable;
  }
}
