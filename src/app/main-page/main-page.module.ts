import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { BannerComponent } from './banner/banner.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../store/effects/product.effect';

@NgModule({
  declarations: [MainPageComponent, BannerComponent, SwiperComponent, ProductsComponent],
  imports: [
    CommonModule,EffectsModule.forFeature([ProductEffects])
  ],
  exports:[MainPageComponent]
})
export class MainPageModule { }
