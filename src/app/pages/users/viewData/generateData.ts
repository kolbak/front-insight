import { FileInfo } from './data&query/data';

export class DataGenerator {

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
}