import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';



@Component({
  selector: 'app-hombres-pages',
  templateUrl: './hombres-pages.component.html',
  styleUrls: ['./hombres-pages.component.css']
})
export class HombresPagesComponent {

  productos: Producto[] = [
    { idProducto: 7, nombreProducto: 'Camiseta', precioProducto: 20 },
    { idProducto: 8, nombreProducto: 'Pantalón', precioProducto: 30 },
    { idProducto: 9, nombreProducto: 'Zapatos', precioProducto: 50 }
  ];
  
}
