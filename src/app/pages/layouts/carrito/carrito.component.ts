import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map } from 'rxjs';
import { Producto } from 'src/app/models/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  @Input() shopping: MatSidenav | undefined;

  productos: Producto[] = [];
  cerrarPedido: boolean = true;
  precioTotalCarrito: Number = 0;

  constructor(private carritoService: CarritoService){}

  ngOnInit(){
    this.carritoService.productos.subscribe( prod => {
      this.productos = prod;
      this.cerrarPedido = prod.length==0 ? true:false;
      //console.log(prod)
    });

    this.carritoService.precioTotal$.subscribe(precioTotal => {
      this.precioTotalCarrito = precioTotal;
    })
  }


}
