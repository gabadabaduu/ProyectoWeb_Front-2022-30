import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.html',
  styleUrls: ['./newpassword.css']
})

export class Newpassword {
  nuevaContrasenaForm: FormGroup;
  exito: boolean = false;
  error: string = '';

  constructor(private fb: FormBuilder) {
    this.nuevaContrasenaForm = this.fb.group({
      nuevaContrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', [Validators.required]]
    }, { validator: this.passwordsIgualesValidator });
  }

  passwordsIgualesValidator(form: FormGroup) {
    const password = form.get('nuevaContrasena')?.value;
    const confirm = form.get('confirmarContrasena')?.value;
    return password === confirm ? null : { passwordsNoCoinciden: true };
  }

  cambiarContrasena() {
    if (this.nuevaContrasenaForm.invalid) {
      this.error = 'Por favor, corrija los errores en el formulario.';
      this.exito = false;
      return;
    }

    // Aquí iría la lógica para cambiar la contraseña, por ejemplo llamando a un servicio.
    // Simulación de éxito:
    setTimeout(() => {
      this.exito = true;
      this.error = '';
      this.nuevaContrasenaForm.reset();
    }, 1000);

    // Si ocurre un error:
    // this.error = 'Ocurrió un error al cambiar la contraseña.';
    // this.exito = false;
  }

}
