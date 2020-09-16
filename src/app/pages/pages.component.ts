import { Component, OnDestroy } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],

  template: `
    <ngx-one-column-layout>
      <nb-menu tag="menu" [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnDestroy {

  private destroy$ = new Subject<void>();
  selectedItem: string;

  constructor(private menuService: NbMenuService ) { }

  menu = MENU_ITEMS;

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  getSelectedItem() {
    this.menuService.getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe( (menuBag) => {
        this.selectedItem = menuBag.item.title;
      });
  }

}
