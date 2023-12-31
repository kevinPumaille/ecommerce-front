import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HombresPagesComponent } from './pages/hombres-pages/hombres-pages.component';
import { MujeresPagesComponent } from './pages/mujeres-pages/mujeres-pages.component';
import { MainComponent } from './pages/main/main.component';
import { BoysPagesComponent } from './pages/boys-pages/boys-pages.component';
import { GirlsPagesComponent } from './pages/girls-pages/girls-pages.component';
import { CarritoPagesComponent } from './pages/carrito-pages/carrito-pages.component';
import { MiCarritoComponent } from './pages/carrito-pages/mi-carrito/mi-carrito.component';
import { IdentificacionComponent } from './pages/carrito-pages/identificacion/identificacion.component';
import { Not404Component } from './pages/not404/not404.component';

/* const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'hombres', component: HombresPagesComponent},
  {path:'mujeres', component: MujeresPagesComponent},
  {path:'niños', component: BoysPagesComponent},
  {path:'niñas', component: GirlsPagesComponent},
  {path:'carrito', component: CarritoPagesComponent, children: [
    {path:'miCarrito', component: MiCarritoComponent},
    {path:'identificacion', component: IdentificacionComponent},
  ]}
]; */

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'hombres', component: HombresPagesComponent},
  {path:'mujeres', component: MujeresPagesComponent},
  {path:'niños', component: BoysPagesComponent},
  {path:'niñas', component: GirlsPagesComponent}, 
  {path:'carrito', component: CarritoPagesComponent, children: [
    {path:'miCarrito', component: MiCarritoComponent},
    {path:'identificacion', component: IdentificacionComponent},
  ]},
  { path: 'not-404', component: Not404Component },
  { path: '**', redirectTo: 'not-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
