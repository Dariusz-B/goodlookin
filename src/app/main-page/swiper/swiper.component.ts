import { ElementRef } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import {Swiper} from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {
  swiper:Swiper;
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(){
    this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
      slidesPerView: 12,
      freeMode: true,

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


