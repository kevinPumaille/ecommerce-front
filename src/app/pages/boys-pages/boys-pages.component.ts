import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';


@Component({
  selector: 'app-boys-pages',
  templateUrl: './boys-pages.component.html',
  styleUrls: ['./boys-pages.component.css']
})
export class BoysPagesComponent {

  productos: Producto[] = [
    { idProducto: 1, nombreProducto: 'Camiseta', precioProducto: 20 },
    { idProducto: 2, nombreProducto: 'Pantalón', precioProducto: 30 },
    { idProducto: 3, nombreProducto: 'Zapatos', precioProducto: 50 },
    { idProducto: 4, nombreProducto: 'Sandalias', precioProducto: 50 }
  ];
  
}
