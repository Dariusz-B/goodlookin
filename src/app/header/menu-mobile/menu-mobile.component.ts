import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { MenuState, MenuItem, MenuSubitem } from 'src/app/models/menu.model';
import * as MenuActions from '../../store/actions/menu.actions';
import * as ProductActions from '../../store/actions/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  menu$: Observable<any> = this.store.select(state => state.menu);
  showMenu: Boolean = false;
  opened: number = -1;

  clickObservable$: Observable<Event> = fromEvent(document,'click');

  constructor(private store: Store<{menu: MenuState}>, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.subscribeToObservable();
  }  
  
  private subscribeToObservable() {
      this.clickObservable$.subscribe(event => { 
        if(event.target["id"] != "mobileMenu__container" && event.target["id"] != "mobileMenu__button" &&
           event.target["className"] != "menu__item" && event.target["className"] != "subitem" && event.target["className"] != "subitem__container")
          this.showMenu = false;
    })
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  toggleChildren(x, menuItem : MenuItem){
    if(menuItem.child){
      if(x == this.opened){
        this.opened = -1;
      }else{
        this.opened = x;
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
      this.showMenu = false;
      this.opened = -1;
    }
  }

  goToCategory(menuItem : MenuItem, menuSubItem? : MenuSubitem){
    
    console.log(menuItem);
    console.log(menuSubItem);

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
    this.showMenu = false;
  }


}
