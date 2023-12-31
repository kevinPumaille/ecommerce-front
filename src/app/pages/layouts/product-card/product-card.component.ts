import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() producto: Producto;
  @Input() predeterminado: string;

  constructor(
    private carritoService: CarritoService
    ){}

  onClick(producto: Producto){
    this.carritoService.agregarNuevoProducto(producto);
  }

  sumarProducto(){
    this.carritoService.sumarProducto(this.producto.idProducto);
  }
  
  restarProducto(){
    this.carritoService.restarProducto(this.producto.idProducto);
  }

  eliminarProducto(){
    this.carritoService.eliminarProducto(this.producto);
  }
}
