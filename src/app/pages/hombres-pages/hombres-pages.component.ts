import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';



@Component({
  selector: 'app-hombres-pages',
  templateUrl: './hombres-pages.component.html',
  styleUrls: ['./hombres-pages.component.css']
})
export class HombresPagesComponent {

  productos: Producto[] = [
    { idProducto: 7, nombreProducto: 'Zapatos Casuales', precioProducto: 20,urlImagen:"../../../../assets/productos/zapatos_casuales.jpg" },
    { idProducto: 8, nombreProducto: 'Zapatos de vestir', precioProducto: 30,urlImagen:"../../../../assets/productos/zapatos_de_vestir.jpg" },
    { idProducto: 9, nombreProducto: 'Botas', precioProducto: 50,urlImagen:"../../../../assets/productos/botas.jpg" }
  ];
  
}
