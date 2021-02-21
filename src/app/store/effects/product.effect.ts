import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, filter, withLatestFrom, take, switchMap, exhaustMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ProductService } from "../../services/product.service";
import { ProductState } from "../../models/product.model";
import * as ProductActions from "../actions/product.actions";

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => 
  this.actions$.pipe(
    ofType(ProductActions.productsRequest),
    mergeMap((action => this.productService.getMultipleProducts({from:action.from, amount:action.amount, category:action.category, subcategory:action.subcategory, promo:action.promo, trend:action.trend, New:action.new, brand:action.brand })
      .pipe(
        map(products => ({ type: ProductActions.productsSuccess.type, products: products})),
        catchError(() => {return EMPTY})
      ))
    )
  )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store<{products: ProductState}>
  ) {}
}