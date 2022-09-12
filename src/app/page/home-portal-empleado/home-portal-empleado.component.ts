import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-portal-empleado',
  templateUrl: './home-portal-empleado.component.html',
  styleUrls: ['./home-portal-empleado.component.css']
})
export class HomePortalEmpleadoComponent implements OnInit {

  constructor(private _router: Router) { 

  }

  ngOnInit(): void {
  }

  irADocumentos(){
    this._router.navigate(['contactos']); 
  }

}
