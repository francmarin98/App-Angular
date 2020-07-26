import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route:ActivatedRoute, public productobjetivo:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros => {
      console.log(parametros["id"]);
      this.productobjetivo.getProducto(parametros['id'])
        .subscribe((producto: productoDescripcion) => {
          console.log(producto);
      });
    }))
  }

}
