import { Component } from '@angular/core';


@Component({
  selector: 'nb-rangepicker-showcase',
  template: `
        <input nbInput placeholder="Pick Date Range" [nbDatepicker]="formpicker">
        <nb-rangepicker #formpicker></nb-rangepicker>
  `,
  styleUrls: ['./datepicker.component.scss'],
})
export class RangepickerShowcaseComponent {
}
