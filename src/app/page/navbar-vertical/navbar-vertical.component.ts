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
    this._router.navigate(['home-portal-empleado']);
  }

  GoToADocumentos(){
    this._router.navigate(['documentos-portal-empleado']); 
  }

  GoToFormacion(){
    this._router.navigate(['formacion']); 
  }

  irAVacantes(){
    this._router.navigate(['contactos']); 
  }
  
  GotoDatosPersonales(){
    this._router.navigate(['datospersonales']); 
  }
  

}
