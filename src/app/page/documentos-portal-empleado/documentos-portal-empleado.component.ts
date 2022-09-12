import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos-portal-empleado',
  templateUrl: './documentos-portal-empleado.component.html',
  styleUrls: ['./documentos-portal-empleado.component.css']
})
export class DocumentosPortalEmpleadoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  GotoDocumentosDesprend() {
    this._router.navigate(['documentos-desprend']);
  }

}
