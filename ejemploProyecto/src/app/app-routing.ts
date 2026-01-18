/*IMPORTAR HERRAMIENTAS*/

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";

/*IMPORTAR COMPONENTES*/
import { Inicio } from "./components/inicio/inicio";
import { DetallePersonaje } from "./components/detalle-personaje/detalle-personaje";
import { ListaPersonajes } from "./components/lista-personajes/lista-personajes";
import { Contacto } from "./components/contacto/contacto";

/*CREAR UNA CONSTANTE DONDE GUARDO LAS RUTAS*/

const misRutas : Routes = [
    {path:'', component: Inicio},
    {path:'personajes', component: ListaPersonajes},
    {path:'personajes/:id', component: DetallePersonaje},
    {path:'contacto', component: Contacto},
    {path:'**', component:Inicio}
];

/*EXPORTAR LAS RUTAS*/
export const appRoutingProviders: any[] = [];
 export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(misRutas);