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
constructor(private router: Router) { }

  registroForm: FormGroup =  new FormGroup({});
  usuario: Usuario = new Usuario();


  ngOnInit(): void {

  }

  createForm(){

  }

  create(){
    this.router.navigate(['login']);

  }
  verifiedResponse(){
    Swal.fire({icon: 'success', title: 'Registro Exitoso', text: 'Usuario registrado correctamente'});
  }


}
