import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuState } from 'src/app/Models/menu.model';
import  {Observable}  from 'rxjs';
import {Store}  from '@ngrx/store';
import * as MenuActions from './../../actions/menu.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu$: Observable<any> = this.store.select(state => state.menu);

  constructor(private store: Store<{menu: MenuState}>) {
   }

  ngOnInit() {
    this.store.dispatch({ type: MenuActions.menuRequest.type });
  }

}