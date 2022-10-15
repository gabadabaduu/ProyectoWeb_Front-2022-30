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
  usuario: Usuario = new Usuario();

  constructor(private _formBuilder: FormBuilder, private router: Router, private _usuarioService: UsuarioServicesService) { }

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
    this.usuario.id=this.id?.value;
    this.usuario.nombre = this.nombre?.value;
    this.usuario.apellido = this.apellido?.value;
    this.usuario.correo = this.correo?.value;
    this.usuario.contrasena = this.contrasena?.value;
    console.log(this.usuario);
    this._usuarioService.save( this.usuario)
    .subscribe(data=>this.verifiedResponse() ) ;
  }
  verifiedResponse(){
    Swal.fire({icon: 'success', title: 'Registro Exitoso', text: 'Usuario registrado correctamente'});    
  }

  get nombre(){
    return this.registroForm .get('nombre');
  }
  get apellido(){
    return this.registroForm .get('apellido');
  }
  get correo(){
    return this.registroForm .get('correo');
  }
  get contrasena(){
    return this.registroForm .get('contrasena');
  }
  get id(){
    return this.registroForm .get('id');
  }


  
}
