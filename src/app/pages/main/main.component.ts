import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  carousel: string[] | undefined;

  carouselMarcas: string[];

  responsiveOptions: any[] | undefined;
  responsiveOptions2: any[] | undefined;

  ngOnInit() {
    this.carousel = [
      '../../../assets/carousel1.jpeg',
      '../../../assets/carousel2.jpeg',
      '../../../assets/carousel4.webp',
      '../../../assets/carousel5.webp',
      '../../../assets/carousel6.webp',
      '../../../assets/carousel7.webp',
    ];

    this.carouselMarcas = [
      '../../../assets/marcas/marca1.webp',
      '../../../assets/marcas/marca2.webp',
      '../../../assets/marcas/marca3.webp',
      '../../../assets/marcas/marca4.webp',
      '../../../assets/marcas/marca5.webp',
      '../../../assets/marcas/marca6.webp',
      '../../../assets/marcas/marca7.webp',
      '../../../assets/marcas/marca8.webp',
      '../../../assets/marcas/marca9.webp',
      '../../../assets/marcas/marca10.webp',
      '../../../assets/marcas/marca11.webp',
      '../../../assets/marcas/marca12.webp',
    ];

    this.responsiveOptions = [
      {
          breakpoint: '2100px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.responsiveOptions2 = [
      {
          breakpoint: '2100px',
          numVisible: 5,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 4,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 3,
          numScroll: 2
      }
  ];

  
  }




}
