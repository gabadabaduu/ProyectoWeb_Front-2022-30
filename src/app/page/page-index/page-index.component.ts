import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {

  constructor(private _router: Router) { 

  }

  ngOnInit(): void {
  }

  irAHomePortalEmpleado(){
    this._router.navigate(['home-portal-empleado']);  
  }

  irARegistro(){
    this._router.navigate(['registro']);
  }

}
