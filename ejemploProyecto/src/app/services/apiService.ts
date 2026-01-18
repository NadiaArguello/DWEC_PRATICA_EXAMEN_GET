import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";  

@Injectable()

export class ApiService{

    public apiURL :string;

    constructor(public _http: HttpClient){
        this.apiURL='https://rickandmortyapi.com/api/character';
    }

    getPersonajes(): Observable <any>{
        return this._http.get(this.apiURL);
    }

    getPersonajeById(id:number): Observable <any>{
        return this._http.get(`${this.apiURL}/${id}`);        
    }

    postPersonaje(datosPersonaje:any): Observable <any>{
        return this._http.post(this.apiURL, datosPersonaje);        
    }

    putPersonaje(id:number, datosPersonaje:any): Observable <any>{
        return this._http.put(`${this.apiURL}/${id}`, datosPersonaje);        
    }

    deletePersonaje(id:number): Observable <any>{
        return this._http.delete(`${this.apiURL}/${id}`);        
    }
    
}