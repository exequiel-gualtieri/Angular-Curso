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
  btnModificar = false;

  agregar() {
    if( !this.descripcion || !this.precio) {
      alert('Todos los campos son obligatorios')
      return;
    }
    

    let articulo: Articulo = new Articulo(this.articulos.length, this.descripcion, this.precio);
    this.articulos.push(articulo);
    this.ordenar()
    alert('El artículo se agregó de forma correcta');
    
    //this.codigo = 0;
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

  seleccionar(art:Articulo) {
    this.codigo = art.codigo;
    this.descripcion = art.descripcion;
    this.precio = art.precio;
    this.btnModificar = !this.btnModificar 
  }

  modificar() {
    let articulo : any = this.buscarArticulo(this.codigo);
    articulo.descripcion = this.descripcion;
    articulo.precio = this.precio;

    this.limpiarCampos()
    alert('El artículo se modificó correctamente');
    this.btnModificar = !this.btnModificar
  }

  limpiarCampos()  {
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  hayRegistros() {
    return Boolean(this.articulos.length);
  }
    
}
