import { ServiceService } from './../services/service.service';
import { Services } from './../modules/services';
import { GalleryModule } from './../modules/gallery-module';
import { GalleryService } from './../services/gallery.service';
import { HomePageService } from './../services/home-page.service';
import { HomepageModule } from './../modules/homepage-module';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable, Subscription } from 'rxjs';


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
  datagallery: GalleryModule[];
  dataServices: Services[];
  connection: Subscription = new Subscription();
  constructor(
    public serviceHomePage: HomePageService,
    public serviceGallery: GalleryService,
    public serviceService: ServiceService,
  ) {
    this.connection = this.serviceHomePage.ReadAllDataHomepage().subscribe((returnData)=>{
      this.dataHomepage =returnData;

    }),
    this.connection = this.serviceGallery.ReadAllDatagallery().subscribe((returnData)=>{
      this.datagallery =returnData;

    }),
    
    this.connection = this.serviceService.ReadAllDataServices().subscribe((returnData)=>{
      this.dataServices =returnData;

    })
   }

  ngOnInit(): void {
  }

}
