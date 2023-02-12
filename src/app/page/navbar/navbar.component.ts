import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
  }
  GotoContact(){
    this._router.navigate(['contacto']);
  }
  GotoMeets(){
    this._router.navigate(['conocenos']);
  }
  GotToRegistro(){
    this._router.navigate(['registro']);
  }
  GotoFORM(){
    this._router.navigate(['formulario']);
  }

}
