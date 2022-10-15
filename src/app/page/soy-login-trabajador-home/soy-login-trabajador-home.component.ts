import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-soy-login-trabajador-home',
  templateUrl: './soy-login-trabajador-home.component.html',
  styleUrls: ['./soy-login-trabajador-home.component.css']
})

export class SoyLoginTrabajadorHomeComponent implements OnInit {

  loginData = {
    "username": '',
    "password": ''
  }

  constructor(
    private _router: Router,
    private usuarioService: UsuarioServicesService,
    ) {

  }

  ngOnInit(): void {

  }

  verifiedResponse() {
    Swal.fire({ icon: 'error', title: 'Usuario no encontrado', text: 'Por favor verifique sus datos' });

  }

  login() {
      this.usuarioService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        this.usuarioService.loginUser(data.token);
        this.usuarioService.getCurrentUser().subscribe((user:any) => {
          this.usuarioService.setUser(user);
          console.log(user);

          this._router.navigate(['/home-portal-empleado']);
        })
      },(error) => {
        console.log(error);
      }
    )
  }













  irARegistro() {
    this._router.navigate(['registro']);
  }


}
