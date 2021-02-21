import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainPageModule } from './main-page/main-page.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { MenuEffects } from './store/effects/menu.effect';
import { ProductEffects } from './store/effects/product.effect';

import * as menuReducer from './store/reducers/menu.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CategoryPageComponent } from './category-page/category-page.component';
import { RouterModule } from '@angular/router';
import * as productsReducer from './store/reducers/product.reducer';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainPageModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({menu: menuReducer.reducer, products: productsReducer.reducer}, {}),
    EffectsModule.forRoot([MenuEffects, ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
