import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {
  registroForm: FormGroup =  new FormGroup({});
  usuario: Usuario = new Usuario();
  constructor(private _formBuilder: FormBuilder, private _router: Router, private _usuarioService: UsuarioServicesService) { 

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registroForm = this._formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],      
    }); 
  }

  
  verifiedResponse(){
    Swal.fire({icon: 'error', title: 'Usuario no encontrado', text: 'Por favor verifique sus datos'});
    
  }
  login (){ 
      this._usuarioService.login(this.usuario).subscribe(
        data => {console.log("Recibido"), this._router.navigate(['home-portal-empleado'])} ,
        error => {console.log("Error"), this.verifiedResponse()}
      );

  }


  irAHomePortalEmpleado(){
    this.usuario.correo = this.correo?.value;
    this.usuario.contrasena = this.contrasena?.value;
    console.log(this.usuario);
    this._usuarioService.login( this.usuario).subscribe(
      data => {
        this._router.navigate(['home-portal-empleado']);
      }
    )    
  }

  irARegistro(){
    this._router.navigate(['registro']);
  }

  get correo(){
    return this.registroForm .get('correo');
  }
  get contrasena(){
    return this.registroForm .get('contrasena');
  }
}
