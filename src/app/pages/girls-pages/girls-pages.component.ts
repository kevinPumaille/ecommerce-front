import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-girls-pages',
  templateUrl: './girls-pages.component.html',
  styleUrls: ['./girls-pages.component.css']
})
export class GirlsPagesComponent {

  productos: Producto[] = [
    { idProducto: 4, nombreProducto: 'Sandalias Delia', precioProducto: 20,urlImagen:"../../../../assets/productos/sandalias_delia_para_ninas.jpg" },
    { idProducto: 5, nombreProducto: 'Zapatos planos', precioProducto: 30,urlImagen:"../../../../assets/productos/zapatos_planos_para_niña.jpg" },
    { idProducto: 6, nombreProducto: 'Zapatos deportivos', precioProducto: 50,urlImagen:"../../../../assets/productos/zapatos_deportivos_para_niña.jpg" },
    { idProducto: 66, nombreProducto: 'Botines Rubi', precioProducto: 50,urlImagen:"../../../../assets/productos/botines_rubi_para_nina.jpg" }
  ];
  
}
