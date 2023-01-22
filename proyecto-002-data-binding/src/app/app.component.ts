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
    if( !this.descripcion || !this.precio) {
      alert('Todos los campos son obligatorios')
      return;
    }
    

    let articulo: Articulo = new Articulo(this.articulos.length, this.descripcion, this.precio);
    this.articulos.push(articulo);
    this.ordenar
    alert('El artículo se agregó de forma correcta');
    
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;

  }

  borrar(codigo: number) {
    const resultado = confirm('¿Desea eliminar este artículo?')
    if(resultado) this.articulos = this.articulos.filter(e => e.codigo !== codigo);
    this.ordenar()
  }

  buscarArticulo(codigo:number) {
    return this.articulos.find(e => e.codigo === codigo)
  }

  ordenar() {
    this.articulos.forEach((e,i)=> {
      e.codigo = i + 1
    })
  }
  // eliminar(art) {
}
