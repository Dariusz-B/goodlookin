import { Component, OnInit } from '@angular/core';
import { MenuState, MenuItem, MenuSubitem } from 'src/app/models/menu.model';
import {Observable}  from 'rxjs';
import {Store}  from '@ngrx/store';
import * as MenuActions from '../../store/actions/menu.actions';
import * as ProductActions from '../../store/actions/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu$: Observable<any> = this.store.select(state => state.menu);



  constructor(private store: Store<{menu: MenuState}>, private readonly router: Router) {
   }

  ngOnInit() {
    this.store.dispatch({ type: MenuActions.menuRequest.type });
  }

  goToCategory(menuItem : MenuItem, menuSubItem? : MenuSubitem){

    if(menuSubItem){
      if(menuItem.param == "subcategory"){
        this.store.dispatch(ProductActions.productsRequest({ amount: 20, subcategory: menuSubItem.name }));
      }else{
        this.store.dispatch(ProductActions.productsRequest({ amount: 20, brand: menuSubItem.name }));
      }
    }else{
      switch(menuItem.param){
        case "trend":{
            this.store.dispatch(ProductActions.productsRequest({ amount: 20, trend: true }));
            break;
        }
        case "new":{
          this.store.dispatch(ProductActions.productsRequest({ amount: 20, new: true }));
          break;
        }
        case "promo":{
          this.store.dispatch(ProductActions.productsRequest({ amount: 20, promo: true }));
          break;
        }
        default:{
          this.store.dispatch(ProductActions.productsRequest({ amount: 20, category: menuItem.name }));
          break;
        }
      }
    }

    this.router.navigate(['category']);
  }

}