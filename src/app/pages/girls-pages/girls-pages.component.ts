import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-girls-pages',
  templateUrl: './girls-pages.component.html',
  styleUrls: ['./girls-pages.component.css']
})
export class GirlsPagesComponent {

  productos: Producto[] = [
    { idProducto: 4, nombreProducto: 'Camiseta', precioProducto: 20 },
    { idProducto: 5, nombreProducto: 'Pantalón', precioProducto: 30 },
    { idProducto: 6, nombreProducto: 'Zapatos', precioProducto: 50 }
  ];
  
}
