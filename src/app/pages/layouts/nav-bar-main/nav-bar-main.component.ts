import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent {

  sidebarVisible1: boolean;
  sidebarVisible: boolean;

  visibleLogin: boolean = false;
  visibleRegistro: boolean = false;

  numeroDeProductos: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.productos.subscribe(productos => {
      this.numeroDeProductos = productos.length;
    })
  }

  onVisibleCambioLogin(cambioVisible: boolean) {
    console.log("cambio Visible: ", cambioVisible);
    this.visibleLogin = cambioVisible;
  }

  onVisibleCambioregistro(cambioVisible: boolean) {
    console.log("cambio Visible: ", cambioVisible);
    this.visibleRegistro = cambioVisible;
  }

  showDialogLogin() {
    console.log(this.visibleLogin);
    this.visibleLogin = true;
  }

  showDialogRegistro() {
    console.log(this.visibleLogin);
    this.visibleRegistro = true;
  }
}
