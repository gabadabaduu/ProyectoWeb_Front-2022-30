import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {
  registroForm!: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  createForm() {}

  create() {
    if (this.registroForm.invalid) {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Por favor completa todos los campos correctamente.' });
      return;
    }

    // Llama al endpoint usando los nombres de campo del backend
    this.usuarioService.registrarUsuario(this.registroForm.value).subscribe(
      res => {
        this.verifiedResponse();
        this.router.navigate(['login']);
      },
      err => {
        Swal.fire({ icon: 'error', title: 'Error', text: err.error?.error || 'No se pudo registrar el usuario.' });
      }
    );
  }

  verifiedResponse() {
    Swal.fire({ icon: 'success', title: 'Registro Exitoso', text: 'Usuario registrado correctamente' });
  }
}
