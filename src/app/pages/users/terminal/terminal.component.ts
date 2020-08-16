import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'ngx-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterContentInit() {
    this.cmd = document.querySelector('#terminal');
  }
  command_history: string[];
  cmd: HTMLDivElement;
  current_path: string = "> ";
  
  changePath(path) {
    this.current_path = path;
  }

  onChange(event: KeyboardEvent) {
    if (event.key != "Enter") return;
    
    // Сохраняем введённое
    let allCommands = document.querySelectorAll('input');
    let command = allCommands[allCommands.length - 1].value
    allCommands[allCommands.length - 1].remove();
    this.cmd.innerHTML += `<span>${command}</span>`
    
    // ОТВЕТ
    let answer = document.createElement('p')
    answer.innerHTML = `Ответ очка: ${this.current_path}`;
    this.cmd.appendChild(answer);


    // Добавляем возможность писать
    this.cmd.innerHTML += `
      <span>${this.current_path}</span><input type="text" (keypress)="onChange($event)" autofocus>
    `
  }
  // Сделать здесь список команд и обработчиков. Обрабатывать при нажатии [Enter]

  // Можно сделать с помощью этой штуки. Аналог shift
  // https://akveo.github.io/nebular/docs/components/autocomplete/overview#nbautocompletedirective

  // Нужно сделать автофокус на последний input

  // Почему-то не применяются стили...
}
