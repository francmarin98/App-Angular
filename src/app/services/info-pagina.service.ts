import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';
import { ProductosService } from './productos.service';
import { infoProducto } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: InfoEquipo[] = [];
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    this.cargainfo();
    this.cargaequipo();
  }

  private cargainfo() {
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina) => {
      console.log(resp); //Ver la respuesta completa
      // console.log(resp['email']); //Ver un campo especifico de la respuesta
      this.cargada = true; //Notifica si la info esta cargada, esto puede servir para hacer loading o algo en particular
      this.info = resp; // Guarda la informacion que viene en la data
    })
  }

  private cargaequipo() {
    this.http.get('https://angular-html-9b36d.firebaseio.com/equipo.json').subscribe((resp: InfoEquipo[]) => {
      console.log(resp);
      this.equipo = resp;
    })
  }
}
