import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { infoProducto } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  producto: infoProducto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-9b36d.firebaseio.com/productos_idx.json')
      .subscribe((data: infoProducto[]) => {
        console.log(data);
        this.producto = data;

        setTimeout(() => {
          this.cargando = false;
        }, 200);
    })
  }
}
