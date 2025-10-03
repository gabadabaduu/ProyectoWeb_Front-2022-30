import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(
    private _router: Router,
    private usuarioService: UsuarioServicesService
  ) { }

  onSubmit() {
    // Lógica para autenticar al usuario usando el endpoint de login-candidato
    this.usuarioService.loginUsuario({
      correo: this.username,
      contrasena: this.password
    }).subscribe({
      next: (res) => {
        // Aquí puedes guardar la sesión si quieres
        this.usuarioService.setUsuarioLogueado(res);
        Swal.fire({ icon: 'success', title: 'Login exitoso', text: 'Bienvenido!' });
        // Redirige al formulario principal o dashboard
        this._router.navigate(['formulario']);
      },
      error: (err) => {
        Swal.fire({ icon: 'error', title: 'Error de login', text: err.error?.error || 'Credenciales inválidas' });
      }
    });
  }

  GotoFORM() {
    this._router.navigate(['formulario']);
  }

  Gotochangepassword() {
    this._router.navigate(['changepassword']);
  }
}
