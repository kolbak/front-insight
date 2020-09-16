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
      <!-- <a *ngFor="let item of menu">item</a>
      <nb-list>
        <nb-list-item *ngFor="let item of menu">
          <nb-icon [icon]="item.icon"></nb-icon>
          <a [href]="item.link">{{ item.title }}</a>
        </nb-list-item>
      </nb-list> -->
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
