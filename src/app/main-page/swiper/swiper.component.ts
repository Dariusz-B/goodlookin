import { Component, AfterViewInit } from '@angular/core';
import {Swiper} from 'swiper/bundle';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {
  public swiper:Swiper;
  constructor() {}

  ngAfterViewInit(){
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,

      breakpoints:{
        900:{
          slidesPerView: 10
        },
        700:{
          slidesPerView: 6
        },
        500:{
          slidesPerView: 3
        }
      }
    });  
  }

}


