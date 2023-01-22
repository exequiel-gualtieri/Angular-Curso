import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artículos:[] = [];
  codigo:number = 0;
  descripcion:string = '';
  precio:number = 0;

  agregar() {
    if(this.codigo || this.descripcion || this.precio) {
      alert('Todos los campos son obligatorios')
      return;
    }

    
  }
}
