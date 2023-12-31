import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';


@Component({
  selector: 'app-boys-pages',
  templateUrl: './boys-pages.component.html',
  styleUrls: ['./boys-pages.component.css']
})
export class BoysPagesComponent {

  productos: Producto[] = [
    { idProducto: 2, nombreProducto: 'Sandalias de batman', precioProducto: 30,urlImagen:"../../../../assets/productos/sandalias_batman_para_nino.jpg" },
    { idProducto: 3, nombreProducto: 'Zapatos oliver', precioProducto: 50,urlImagen:"../../../../assets/productos/zapatos_oliver_ox_para_ninos_p.jpg" },
    { idProducto: 4, nombreProducto: 'Tenis space', precioProducto: 50,urlImagen:"../../../../assets/productos/tenis_space_para_ninos_pequeno.jpg" }
  ];
  
}
