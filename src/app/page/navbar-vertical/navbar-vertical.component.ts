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
  irADocumentos(){
    this._router.navigate(['contactos']); 
  }

}
