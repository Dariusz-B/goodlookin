import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { MenuState } from 'src/app/models/menu.model';
import * as MenuActions from './../../actions/menu.actions';

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

  constructor(private store: Store<{menu: MenuState}>) {
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

  toggleChildren(x){
    if(x == this.opened){
      this.opened = -1;
    }else{
      this.opened = x;
    }
  }

}
