import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import Swal from 'sweetalert2';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';

@Component({
  selector: 'app-soy-login-trabajador-home',
  templateUrl: './soy-login-trabajador-home.component.html',
  styleUrls: ['./soy-login-trabajador-home.component.css']
})

export class SoyLoginTrabajadorHomeComponent implements OnInit {

  constructor(    private _router: Router       ) {

  }

  ngOnInit(): void {

  }

  verifiedResponse() {
    Swal.fire({ icon: 'error', title: 'Usuario no encontrado', text: 'Por favor verifique sus datos' });

  }

  login() {
      this._router.navigate(['home-portal-empleado']);
  }
  irARegistro() {
    this._router.navigate(['registro']);
  }
  


}
