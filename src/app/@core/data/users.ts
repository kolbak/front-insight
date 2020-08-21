import { Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}


// Наш юзер
// export class User {
//   constructor(name: string, position: string,  description: string) {
//     this.name = name;
//     this.position = position;
//     this.description = description;
//   }
  

//   name: string;
//   position: string;
//   description: string;
// }