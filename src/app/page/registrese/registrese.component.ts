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

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  createForm(){
     
  }

  create(){
    
  }
  verifiedResponse(){
    Swal.fire({icon: 'success', title: 'Registro Exitoso', text: 'Usuario registrado correctamente'});    
  }

  


  
}
