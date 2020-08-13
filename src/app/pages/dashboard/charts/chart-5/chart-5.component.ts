import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-5',
  templateUrl: 'chart-5.component.html',
  styleUrls: ['chart-5.component.scss']
})
export class Chart5Component implements OnInit{
    ngOnInit() {
        
    }

    getC(r: number) {
        return 2 * Math.PI * r;
    }
}