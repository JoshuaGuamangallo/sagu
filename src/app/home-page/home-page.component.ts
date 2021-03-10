import { HomePageService } from './../services/home-page.service';
import { HomepageModule } from './../modules/homepage-module';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable, Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public configs: SwiperConfigInterface ={
    pagination: { el: '.swiper-pagination', clickable: true },
    grabCursor: false,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 1
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 1000,
    effect: "fade"
  };

  dataHomepage: HomepageModule[];
  connection: Subscription = new Subscription();
  constructor(
    public service: HomePageService
  ) {
    this.connection = this.service.ReadAllDataHomepage().subscribe((returnData)=>{
      this.dataHomepage =returnData;
      console.log(this.dataHomepage);
    })
   }

  ngOnInit(): void {
  }

}
