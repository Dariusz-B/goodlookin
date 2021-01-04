import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, filter, withLatestFrom, take } from 'rxjs/operators';
import { MenuService } from './../services/menu.service';
import * as MenuActions from '../actions/menu.actions'
import { Store } from '@ngrx/store';
import { MenuState } from '../models/menu.model';
 
@Injectable()
export class MenuEffects {

  loadMenu$ = createEffect(() => this.actions$.pipe(
    ofType(MenuActions.menuRequest.type),
    withLatestFrom(this.store),
    mergeMap(() => this.menuService.getMenu()
      .pipe(
        map(menu => ({ type: MenuActions.menuSuccess.type, menu: menu})),
        catchError(() => {return EMPTY})
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private menuService: MenuService,
    private store: Store<{menu: MenuState}>
  ) {}
}