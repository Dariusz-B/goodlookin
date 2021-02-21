import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from '../models/product.model';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  products$: Observable<any> = this.store.select(state => state.products.products);

  constructor(private store: Store<{products: ProductState}>) {
  }

  ngOnInit(): void {

  }


}
