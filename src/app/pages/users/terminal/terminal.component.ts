import { Component } from '@angular/core';

@Component({
  selector: 'ngx-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent  {

  cmdHistory: string[] = new Array();
  
  constructor() { }
  
  command_history: string[];
  current_path: string = "> ";

  onChange(event: KeyboardEvent) {
    if (event.key != "Enter") return;
    
    // Сохраняем введённое
    let allCommands = document.querySelectorAll('input');
    let command = allCommands[allCommands.length - 1].value;
    allCommands[allCommands.length - 1].value = "";
    
    this.cmdHistory.push(command);


    // ОТВЕТ
    this.cmdHistory.push(`${this.current_path} -- тут ответ`);
  }
  // Сделать здесь список команд и обработчиков. Обрабатывать при нажатии [Enter]

  // Можно сделать с помощью этой штуки. Аналог shift
  // https://akveo.github.io/nebular/docs/components/autocomplete/overview#nbautocompletedirective

}
