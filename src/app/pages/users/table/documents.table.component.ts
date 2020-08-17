import { Input, Component } from '@angular/core';

import { FileInfo } from '../documents/documents.component';

@Component({
  selector: 'documents-table',
  templateUrl:'documents.table.component.html',
  styleUrls: ['documents.table.component.scss']
})
export class DocumentsTableComponent {

  @Input() dataArr: FileInfo[];
  
  constructor() {}
  
}