import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaPersonajes } from './components/lista-personajes/lista-personajes';
import { DetallePersonaje } from './components/detalle-personaje/detalle-personaje';
import { Inicio } from './components/inicio/inicio';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [
    App,
    DetallePersonaje, 
    ListaPersonajes, Inicio, Contacto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProviders
  ],
  bootstrap: [App]
})
export class AppModule { }
