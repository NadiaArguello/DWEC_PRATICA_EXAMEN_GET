import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Personaje } from '../../models/personaje.model';
import { ApiService } from '../../services/apiService';

@Component({
  selector: 'app-lista-personajes',
  standalone: false,
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css',
  providers:[ApiService]
})
export class ListaPersonajes implements OnInit {

  public listaPersonajes: Personaje[]=[];
  public listaFiltrada: Personaje[]=[]; //Creación de un array vacío donde meteremos todos los datos de personajes

  public filtroNombre:string='';
  public filtroEstado: string = ''; 
  public filtroEspecie: string = ''; 
  public filtroGenero: string = '';

  constructor(
    private _apiService: ApiService,
    private cdr : ChangeDetectorRef
  ){}

  //Método onInit que dice qué hay que tiene que hacer al inicializarse el componente
  ngOnInit():void{
    this.cargarDatos(); //Lo unico que hace el onInit es llamar al método cargarDatos
  }

//Metodo cargarDatos. Lo que hace es llamar a la API, hacer la consulta GET a través del método getPersonajes que hemos definido en el service
//Y después, recibe toda la lista de personajes y la mete en el Array vacío que hemos creado más arriba
//También gestiona el error de que no encuentre los datos
  cargarDatos(): void{
    this._apiService.getPersonajes().subscribe({
      next: (response) => {
        this.listaPersonajes = response.results;
        this.listaFiltrada = [...this.listaPersonajes];
        this.cdr.detectChanges();
      },
      error:(error) =>{
        console.error('Error al cargar personajes', error);
      }
    });
  }

aplicarFiltros():void{
  const nombre = this.filtroNombre.trim().toLowerCase();
  const estado = this.filtroEstado
  const especie = this.filtroEspecie
  const genero = this.filtroGenero

  this.listaFiltrada = this.listaPersonajes.filter(pers =>{
    const cumpleNombre = !nombre || pers.name.toLowerCase().includes(nombre);
    const cumpleEstado = !estado || (pers.status?? 'unknown') === estado;
    const cumpleEspecie = !especie || pers.species === especie;
    const cumpleGenero =  !genero || pers.gender === genero;

    return cumpleNombre && cumpleEstado && cumpleEspecie && cumpleGenero;
  });

  this.cdr.detectChanges();  

}

limpiarFiltros(): void{
  this.filtroNombre='';
  this.filtroEstado= ''; 
  this.filtroEspecie= ''; 
  this.filtroGenero= '';

  this.listaFiltrada=[...this.listaPersonajes];
  this.cdr.detectChanges();
}

}
