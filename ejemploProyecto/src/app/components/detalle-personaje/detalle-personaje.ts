import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Personaje } from '../../models/personaje.model';
import { ApiService } from '../../services/apiService';

@Component({
  selector: 'app-detalle-personaje',
  standalone: false,
  templateUrl: './detalle-personaje.html',
  styleUrl: './detalle-personaje.css',
  providers:[ApiService]
})
export class DetallePersonaje implements OnInit {

  public datosPersonaje!: Personaje;

  constructor(
      private _apiService: ApiService,
      private cdr : ChangeDetectorRef,
      private route:ActivatedRoute  
  ) {}

ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarDetalle(id);
}

cargarDetalle(id:number):void{
    this._apiService.getPersonajeById(id).subscribe({
      next: (response) => {
        this.datosPersonaje = response;
        this.cdr.detectChanges();
      },
      error:(error) =>{
        console.error('Error al cargar datos del personaje', error);
      }
    });
}

}
