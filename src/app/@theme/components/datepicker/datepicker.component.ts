import { Component } from '@angular/core';


@Component({
  selector: 'nb-rangepicker-showcase',
  template: `
        <input nbInput placeholder="Выберете дату" [nbDatepicker]="formpicker">
        <nb-rangepicker #formpicker></nb-rangepicker>
  `,
  styleUrls: ['./datepicker.component.scss'],
})
export class RangepickerShowcaseComponent {
}
