import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito-pages',
  templateUrl: './carrito-pages.component.html',
  styleUrls: ['./carrito-pages.component.css'],
  providers: [MessageService]
})
export class CarritoPagesComponent {

  items: MenuItem[];


  constructor() {}

  ngOnInit() {
      this.items = [
          {
              label: 'Mi carrito',
              routerLink: 'miCarrito'
          },
          {
              label: 'Identificación',
              routerLink: 'identificacion'
          },
          {
              label: 'Envio',
              routerLink: 'payment'
          },
          {
              label: 'Pago',
              routerLink: 'confirmation'
          },
          {
              label: 'Confirmación',
              routerLink: 'confirmation'
          }
      ];
   
  }

}
