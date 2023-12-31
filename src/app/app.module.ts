import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HombresPagesComponent } from './pages/hombres-pages/hombres-pages.component';
import { MujeresPagesComponent } from './pages/mujeres-pages/mujeres-pages.component';
import { BoysPagesComponent } from './pages/boys-pages/boys-pages.component';
import { GirlsPagesComponent } from './pages/girls-pages/girls-pages.component';
import { ProductCardComponent } from './pages/layouts/product-card/product-card.component';
import { LoginDialogComponent } from './pages/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './pages/dialogs/register-dialog/register-dialog.component';
import { CarritoComponent } from './pages/layouts/carrito/carrito.component';
import { PrimengModule } from './primeng/primeng.module';
import { CarritoPagesComponent } from './pages/carrito-pages/carrito-pages.component';
import { MiCarritoComponent } from './pages/carrito-pages/mi-carrito/mi-carrito.component';
import { IdentificacionComponent } from './pages/carrito-pages/identificacion/identificacion.component';
import { NavBarMainComponent } from './pages/layouts/nav-bar-main/nav-bar-main.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Not404Component } from './pages/not404/not404.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HombresPagesComponent,
    MujeresPagesComponent,
    BoysPagesComponent,
    GirlsPagesComponent,
    ProductCardComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    CarritoComponent,
    CarritoPagesComponent,
    MiCarritoComponent,
    IdentificacionComponent,
    NavBarMainComponent,
    Not404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
