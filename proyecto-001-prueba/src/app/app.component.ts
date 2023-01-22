import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Exequiel';
  apellido = 'Gualtieri';
  edad = 29;
  email = 'exequielgualtieri.dev@gmail.com';
  sueldos = [18000, 24000, 30000];
  activo = true;
  contador = 1;

  incrementar() {
    this.contador++
  }

  decrementar() {
    --this.contador;
  }
  
  esActivo() {
    return this.activo ? 'Trabajador activo' : 'Trabajador inactivo'
  }

  ultimos3Sueldos() {
    return this.sueldos.reduce((a, v) => (a += v, a), 0)
    
    let suma = 0;
    this.sueldos.forEach(e => {
      suma += e;
    })
    return suma;

  }
}
