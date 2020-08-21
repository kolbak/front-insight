import { FileInfo } from './data&query/data';
import { User } from '../../../@core/data/users';

export class DataGenerator {

    // private names: string[] = [
    //     'Александр', 'Сергей', 'Дмитрий', 'Андрей', 'Алексей', 'Максим', 'Евгений', 'Владимир', 'Иван', ''
    // ];

    static makeSize(): string {
        return `${Math.random()*100}mb`;
    }
    static makeName(prefix: string, type: string[]): string  {
        // var text = "file_";
        var variants = "abcdefghijklmnopqrstuvwxyz";
    
        for( var i = 0; i < 5; i++ )
          prefix += variants.charAt(Math.floor(Math.random() * variants.length));
    
        return prefix + '.' + type[Math.floor(Math.random() * type.length)];
    }
    static randomDate(start:Date, end:Date): Date {
      return new Date(start.getTime() 
              + Math.random() * (end.getTime() - start.getTime()));
    }
    static randomArrayPos(arr: Array<string>): string { 
        return arr[Math.floor(Math.random() * arr.length)]
    }


    static createFileInfo(amount: Number = 10, prefix: string = "_", type: string[] = [""]): FileInfo[] {
        let data: FileInfo[] = [];
        for (let i = 0; i < amount; i++) {
            data.push(new FileInfo(
                DataGenerator.makeName(prefix, type), 
                DataGenerator.randomDate(new Date(2012, 0, 1), new Date()), 
                DataGenerator.makeSize()));
        }
        return data;
    }

    // static createUsers(amount: Number): User[] 
    // {
    //     let users: User[] = [];
    //     for (let i = 0; i < amount; i++) {
    //         users.push(new User(makeName("Carla ")))
    //     }
    //     return users;
    // }
}