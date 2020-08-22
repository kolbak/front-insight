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
  public MAINUSER:string;
  constructor(public server: ServerService,public router: Router) {
     server.getAllUsers();

     //this.MAINUSER = server.allusers..uuid;

   }
  async ngOnInit(){
  }


  GetUserToRoute(uuid:string){
    this.MAINUSER = uuid;
    this.router.navigate(['/pages/users/default']);
  }

}
