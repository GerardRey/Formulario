import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  erDNI = "^[0-9]{8}[A-Za-z]$";
  mostrarInfo ="";
  validargrande ="";

  title = 'ProyectoNelson';

  EnviarDatos(nombre, dni, textogrande) {
    if(nombre.value == ""){
      alert("El nombre esta vacio")
    }

    if(dni.match(this.erDNI)) {
      this.mostrarInfo="Correcto"
    } else {
      this.mostrarInfo="Incorrecto"
    }

    if(textogrande.value.length < 2) {
      this.validargrande="El texto introducido es demasido corto";
    }
  }
}
