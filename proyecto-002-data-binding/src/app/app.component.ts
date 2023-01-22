import { Component } from '@angular/core';
import Articulo from './models/articulos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos:Array<Articulo> = [];
  codigo:number = 0;
  descripcion:string = '';
  precio:number = 0;

  agregar() {
    if(!this.codigo || !this.descripcion || !this.precio) {
      alert('Todos los campos son obligatorios')
      return;
    }
    let articulo: Articulo = new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo);

    alert('El artículo se agregó de forma correcta');
  }

  eliminar() {

  }
}
