import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Update the import path to match the actual location and filename of the service
import { UsuarioServicesService } from '../services/usuario-services.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.html',
  styleUrls: ['./changepassword.css']
})
export class Changepassword {


    recuperarForm: FormGroup;
  enviado: boolean = false;
  error: string = "";

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioServicesService
  ) {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  solicitarRecuperacion(): void {
    if (this.recuperarForm.valid) {
      this.usuarioService.solicitarRecuperacionPassword(this.recuperarForm.value.email)
        .subscribe({
          next: () => {
            this.enviado = true;
            this.error = "";
          },
          error: (err) => {
            this.error = "No se pudo enviar el correo. Verifica el email.";
          }
        });
    }
  }
}
