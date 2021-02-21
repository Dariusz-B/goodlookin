import { Component, OnInit } from '@angular/core';
import { ProductState } from 'src/app/models/product.model';
import {Observable}  from 'rxjs';
import {Store}  from '@ngrx/store';
import * as ProductActions from '../../store/actions/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  lessItems: number = 8;
  moreItems: number = 16;
  productCategory: string = 'recomended';

  products$: Observable<any> = this.store.select(state => state.products.products);
  numberOfItems: number = this.lessItems;

  constructor(private store: Store<{products: ProductState}>) {
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.productsRequest({ amount: this.moreItems }));
  }

  showMoreProducts(){
    this.numberOfItems = this.moreItems;
  }

  showLessProducts(){
    this.numberOfItems = this.lessItems;
  }

  showRecomended(){
    this.store.dispatch(ProductActions.productsRequest({ amount: this.moreItems }));
    this.productCategory = 'recomended';
  }

  showNewest(){
    this.store.dispatch(ProductActions.productsRequest({ amount: this.moreItems, new: true }));
    this.productCategory = 'newest';
  }

  showDiscounted(){
    this.store.dispatch(ProductActions.productsRequest({ amount: this.moreItems, promo: true }));
    this.productCategory = 'discounted';
  }
}



