import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

constructor( private _router: Router) { }

  username: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica para autenticar al usuario,
    // por ejemplo, llamar a un servicio que haga la petición al backend.
    console.log('Usuario:', this.username, 'Contraseña:', this.password);
  }

 GotoFORM(){
    this._router.navigate(['formulario']);
  }

}
