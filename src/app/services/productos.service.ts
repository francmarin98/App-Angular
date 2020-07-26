import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { infoProducto } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  producto: infoProducto[] = [];
  productosfiltados: infoProducto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve,reject) => {
      this.http.get('https://angular-html-9b36d.firebaseio.com/productos_idx.json')
        .subscribe((data: infoProducto[]) => {
          this.producto = data;
          this.cargando = false;
          resolve();
      })
    })

  }

  getProducto(id:string) {
    return this.http.get(`https://angular-html-9b36d.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string) {

    if(this.producto.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //se ejecuta despues de tener los productos
        this.filtrarProductos(termino);
      })
    } else {
      //busca directamente
      this.filtrarProductos(termino);
    }
  }

  filtrarProductos(termino: string) {
    this.productosfiltados = [];
    termino = termino.toLowerCase();
    this.producto.forEach(prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosfiltados.push(prod);
      }
    })
  }
}
