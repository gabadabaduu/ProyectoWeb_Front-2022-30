import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      const email = this.recuperarForm.value.email;
      this.usuarioService.buscarEmail(email).subscribe({
        next: (res) => {
          if (res.existe) {
            this.enviado = true;
            this.error = "";
          } else {
            this.error = "El correo no está registrado.";
            this.enviado = false;
          }
        },
        error: () => {
          this.error = "Error al contactar al servidor. Intenta de nuevo.";
          this.enviado = false;
        }
      });
    }
  }
}
