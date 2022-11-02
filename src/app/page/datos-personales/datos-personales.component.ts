import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  usuario: Usuario = new Usuario();
  usuario2: Usuario = new Usuario();
  public id: any = "";
  public usuario3: any = [];

  public forma: FormGroup = new FormGroup({});

  lista: Usuario[] = [];

  constructor(private _router: Router, private _usuarioService: UsuarioServicesService, private _ar: ActivatedRoute, private _formBuilder: FormBuilder) { }

  eliminarData = {
    "id": ''
  }

  ngOnInit(): void {
    //this._usuarioService.isLoggedIn();    
    this.id = this._ar.snapshot.paramMap.get('id');
    this.createForm();
    this.verDATOS(this.id);
  }

  createForm(){
    this.forma = this._formBuilder.group({
    correo: [null, [Validators.minLength(1), Validators.maxLength(50)]],
    nombre: [null, [Validators.minLength(1), Validators.maxLength(50)]],
    apellido: [null, [Validators.minLength(1), Validators.maxLength(50)]],
    username: [null, [Validators.minLength(1), Validators.maxLength(50)]],
    password: [null, [Validators.minLength(1), Validators.maxLength(50)]],
    });

  }

  verDATOS(id: any) {   
    this._usuarioService.getId(id)   
      .subscribe({
        next: (data) =>{ this.showUsuario( data )}
      }) ;
  }

  showUsuario(datos: any) {
    this._usuarioService.isLoggedIn();
    this.usuario3 = datos;
    console.log(this.usuario3);
    this.correo?.setValue(this.usuario3.email);
    this.nombre?.setValue(this.usuario3.nombre);
    this.apellido?.setValue(this.usuario3.apellido);
    this.Username?.setValue(this.usuario3.username);
    this.password?.setValue(this.usuario3.password);
    console.log(datos);
  }

  get correo() {
    return this.forma.get('correo');
  }

  get nombre() {
    return this.forma.get('nombre');
  }

  get apellido() {
    return this.forma.get('apellido');
  }

  get Username() {
    return this.forma.get('username');
  }

  get password() {
    return this.forma.get('password');
  }


  Modificar() {
    // convertir string a int
    //this.usuario.nombre = this.ModificarData.nombre;
    this.usuario3.email = this.correo?.value;
    this.usuario3.nombre = this.nombre?.value;
    this.usuario3.apellido = this.apellido?.value;
    this.usuario3.username = this.Username?.value;
    this.usuario3.password = this.password?.value;
    
    //this.usuario.password = this.ModificarData.password;
    console.log(this.usuario3);
    
    this._usuarioService.actualizar(this.usuario3).subscribe(
      (data: any) => {
        console.log(data);
        //this._router.navigate(['/home-portal-empleado']);
      }, (error) => {
        console.log(error);
      }
    )
  }

  Eliminar() {    
    this._usuarioService.eliminar(parseInt(this.eliminarData.id)).subscribe(
      (data: any) => {
        console.log(data);
        //this._router.navigate(['']);
      }
    )

  }

  Mostrar() {

    this._usuarioService.isLoggedIn();
    this._usuarioService.mostrar().subscribe(
      response => {
        this._router.navigate(['/home-portal-empleado']);
        return this.lista = response;

      }


    )
  }

}

