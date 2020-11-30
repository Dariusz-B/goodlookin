import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
import { MenuService } from './../Services/menu.service';
import * as MenuActions from '../actions/menu.actions'
 
@Injectable()
export class MenuEffects {
 
  loadMenu$ = createEffect(() => this.actions$.pipe(
    ofType(MenuActions.menuRequest.type),
    mergeMap(() => this.menuService.getMenu()
      .pipe(
        map(menu => ({ type: MenuActions.menuSuccess.type, menu: menu })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private menuService: MenuService
  ) {}
}