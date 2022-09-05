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
  registroForm: FormGroup =  new FormGroup({});
  UsuarioServicesService: any;
  usuario: Usuario = new Usuario();

  constructor(private _formBuilder: FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.registroForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],      
    }); 
  }

  create(){
    this.usuario.nombre = this.registroForm.value.nombre;
    this.usuario.apellido = this.registroForm.value.apellido;
    this.usuario.correo = this.registroForm.value.correo;
    this.usuario.contrasena = this.registroForm.value.contrasena;
    this.UsuarioServicesService.saveEmployee(this.usuario).subscribe(
      (respuesta: Object) => {
        Swal.fire({
          title: 'Registro exitoso',
          text: 'Se ha registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['']);
      }
    );

  }


  
}
