import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoProductos: Producto[] = [];

  private _productos: BehaviorSubject<Producto[]>;
  private _precioTotal: BehaviorSubject<number>;

  constructor() {
    this._productos = new BehaviorSubject<Producto[]>([]);
    this._precioTotal = new BehaviorSubject<number>(0);
  }

  get productos() {
    return this._productos.asObservable();
  }

  get precioTotal$() {
    return this._precioTotal.asObservable();
  }

  set precioTotalActualizar(precioTotal: number){
    this._precioTotal.next(precioTotal);
  }

  agregarNuevoProducto(producto: Producto) {

    const productoExistente = this.carritoProductos.find((p) => p.idProducto === producto.idProducto);

    if (productoExistente) {
      // Si ya existe, actualiza las propiedades
      productoExistente.cantidadProducto += 1;
      productoExistente.precioTotal += producto.precioProducto;
      const nuevoPrecioTotal = this.calcularPrecioTotal();
      this._precioTotal.next(nuevoPrecioTotal);
    } else {
      // Si no existe, agrégalo al array
      const nuevoProducto: Producto = { ...producto, cantidadProducto: 1, precioTotal: producto.precioProducto };
      this.carritoProductos.push(nuevoProducto);
    }

    // Notifica a los observadores sobre el cambio en la lista de productos
    this._productos.next(this.carritoProductos);

    const nuevoPrecioTotal = this.calcularPrecioTotal();
    this._precioTotal.next(nuevoPrecioTotal);
  }

  private calcularPrecioTotal(): number {
    let productoPrecio = 0;
    this.carritoProductos.forEach(prod => {
      productoPrecio += prod.precioTotal;
    });
    return productoPrecio;
  }

  sumarProducto(idProducto: number) {
    const productoEncontrado = this.carritoProductos.find(producto => producto.idProducto === idProducto);

    if (productoEncontrado) {
      // Modificar la propiedad 'cantidad' del objeto encontrado
      productoEncontrado.cantidadProducto += 1;
      productoEncontrado.precioTotal += productoEncontrado.precioProducto;
      this._productos.next(this.carritoProductos);
      const nuevoPrecioTotal = this.calcularPrecioTotal();
      this._precioTotal.next(nuevoPrecioTotal);
      //console.log(`Se ha modificado la cantidad del producto con ID.`);
    } else {
      //console.log(`No se encontró un producto con ID`);
    }

    this._productos.next(this.carritoProductos);
  }

  restarProducto(idProducto: number) {
    const productoEncontrado = this.carritoProductos.find(producto => producto.idProducto === idProducto);

    if (productoEncontrado) {
      // Modificar la propiedad 'cantidad' del objeto encontrado
      productoEncontrado.cantidadProducto -= 1;
      productoEncontrado.precioTotal -= productoEncontrado.precioProducto;
      
      const nuevoPrecioTotal = this.calcularPrecioTotal();
      
      console.log(`Se ha modificado la cantidad del producto con ID.`);
      if (productoEncontrado.cantidadProducto === 0) {
        // Eliminar el producto del array cuando la cantidad es cero
        const index = this.carritoProductos.indexOf(productoEncontrado);
        if (index !== -1) {
          this.carritoProductos.splice(index, 1);
          //console.log(`El producto con ID ${idProducto} ha sido eliminado del carrito.`);
        }
      }

      this._productos.next(this.carritoProductos);
      this._precioTotal.next(nuevoPrecioTotal);
    } else {
      //console.log(`No se encontró un producto con ID`);
    }

    this._productos.next(this.carritoProductos);
  }

  eliminarProducto(producto: Producto){
    const index = this.carritoProductos.indexOf(producto);
        if (index !== -1) {
          this.carritoProductos.splice(index, 1);
          
          this._productos.next(this.carritoProductos);
          this._precioTotal.next(this.calcularPrecioTotal());
          //console.log(`Precio actual: ${this._productos}`);
        }
  }
}
