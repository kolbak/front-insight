import { ServerService, Media } from './../../../server.service';
import { Component } from '@angular/core';

import { FileInfo } from '../viewData/data&query/data';
import { DataGenerator } from '../viewData/generateData';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  media : Observable<Media>;
  data: FileInfo[] = [];
  constructor(private server: ServerService) {
    this.data.push(...DataGenerator.createFileInfo(30, "video_", ["mp4"]));
  }

  ngOnInit(){
    this.server.telecast.subscribe((resp )=>{
      this.media = this.server.getVideosForUser(resp);
      // this.screenshots.subscribe(files => this.screens = files);
    })}

  viewTable: boolean = true;
  // Изменение отображения
  // Карточки VS таблица
  switchViewApproach(viewTable: boolean) {
    this.viewTable = viewTable;
  }
}
