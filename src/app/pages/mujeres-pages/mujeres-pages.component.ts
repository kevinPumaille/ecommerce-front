import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-mujeres-pages',
  templateUrl: './mujeres-pages.component.html',
  styleUrls: ['./mujeres-pages.component.css']
})
export class MujeresPagesComponent {

  productos: Producto[] = [
    { idProducto: 10, nombreProducto: 'Sandalias Mylls', precioProducto: 20,urlImagen:"../../../../assets/productos/sandalias_mylls_para_mujer.jpg" },
    { idProducto: 11, nombreProducto: 'Zapatos casuales', precioProducto: 30,urlImagen:"../../../../assets/productos/zapatos_casuales_para_mujer.jpg" },
    { idProducto: 12, nombreProducto: 'Botines Taylor', precioProducto: 50,urlImagen:"../../../../assets/productos/botines_taylor_para_mujer.jpg" }
  ];

  //productos: List[] = [];

}
