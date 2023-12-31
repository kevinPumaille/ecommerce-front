import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-mujeres-pages',
  templateUrl: './mujeres-pages.component.html',
  styleUrls: ['./mujeres-pages.component.css']
})
export class MujeresPagesComponent {

  productos: Producto[] = [
    { idProducto: 10, nombreProducto: 'Camiseta', precioProducto: 20 },
    { idProducto: 11, nombreProducto: 'Pantalón', precioProducto: 30 },
    { idProducto: 12, nombreProducto: 'Zapatos', precioProducto: 50 }
  ];

  //productos: List[] = [];

}
