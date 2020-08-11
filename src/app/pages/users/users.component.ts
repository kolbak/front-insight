import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
