import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { BannerComponent } from './banner/banner.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [MainPageComponent, BannerComponent, SwiperComponent, ProductsComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[MainPageComponent]
})
export class MainPageModule { }
