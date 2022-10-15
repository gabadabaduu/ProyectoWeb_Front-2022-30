import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.css']
})
export class NavbarVerticalComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
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

}
