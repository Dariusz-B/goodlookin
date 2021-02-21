import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const productsRequest = createAction(
    '[Backend API] Get products request',
    props<{from?: number, amount?: number, category?: string, subcategory?: string, promo?: boolean, trend?: boolean, new?: boolean, brand?: string}>()
  );

export const productsSuccess = createAction(
    '[Backend API] Get products success',
    props<{ products: Product[]}>()
  );

export const productsFail = createAction(
    '[Backend API] Get products fail'
  );