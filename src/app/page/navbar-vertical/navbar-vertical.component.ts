import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.css']
})
export class NavbarVerticalComponent implements OnInit {
  public id: any = "";
  constructor(private _router: Router, private _ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._ar.snapshot.paramMap.get('id');
  }

  GoToHome(){
    this._router.navigate(['home-portal-empleado', this.id]);
  }

  GoToADocumentos(){
    this._router.navigate(['documentos-portal-empleado', this.id]); 
  }

  GoToFormacion(){
    this._router.navigate(['formacion', this.id]); 
  }

  irAVacantes(){
    this._router.navigate(['contactos', this.id]); 
  }
  
  GotoDatosPersonales(){
    this._router.navigate(['datospersonales', this.id]); 
  }
  

}
