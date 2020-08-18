
export class FileInfo {
    constructor(name : string, date: Date, size: string) {
        this.name = name;
        this.date = date;
        this.size = size;
    }

    name: string;
    date: Date;
    size: string;
}