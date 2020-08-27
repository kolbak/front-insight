import { Component } from '@angular/core';


@Component({
  selector: 'nb-rangepicker-showcase',
  template: `
        <nb-form-field>
          <nb-icon nbPrefix icon="calendar-outline" pack="eva"></nb-icon>
          <input type="text" nbInput placeholder="Выберите дату" [nbDatepicker]="formpicker">
        </nb-form-field>
        <nb-rangepicker #formpicker></nb-rangepicker>
  `,
  styleUrls: ['./datepicker.component.scss'],
})
export class RangepickerShowcaseComponent {
}
