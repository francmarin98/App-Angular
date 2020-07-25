import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    console.log('Servicio activo');
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina) => {
      // console.log(resp); //Ver la respuesta completa
      // console.log(resp['email']); //Ver un campo especifico de la respuesta
      this.cargada = true; //Notifica si la info esta cargada, esto puede servir para hacer loading o algo en particular
      this.info = resp; // Guarda la informacion que viene en la data
    })
  }
}
