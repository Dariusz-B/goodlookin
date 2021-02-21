import  {Action, createReducer, on}  from  '@ngrx/store'
import * as ProductActions from '../actions/product.actions'
import {ProductState} from '../../models/product.model'

export const ProductInitial : ProductState = {
    products: [],
    loaded: false,
    loading: false
}

const productReducer = createReducer(
    ProductInitial,
    on(ProductActions.productsRequest, state => ({ ...state })),
    on(ProductActions.productsFail,    state => ({ ...state, loading: false })),
    on(ProductActions.productsSuccess, (state, {products}) => ({ ...state, loading: false, products: products, loaded: true}))
);
  
export function reducer(state: ProductState | undefined, action: Action) {
    return productReducer(state, action);
}