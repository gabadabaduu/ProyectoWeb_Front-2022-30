import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';

@Component({
  selector: 'app-documentos-portal-empleado',
  templateUrl: './documentos-portal-empleado.component.html',
  styleUrls: ['./documentos-portal-empleado.component.css']
})
export class DocumentosPortalEmpleadoComponent implements OnInit {
  public id: any = "";
  


  constructor(private _router: Router, private _ar: ActivatedRoute, private _usuarioService: UsuarioServicesService) { }

  ngOnInit(): void {
    
  }

  GotoDocumentosDesprend() {
    this._router.navigate(['documentos-desprend']);
  }
  
  GotoDocumentosLiquid() {
    this._router.navigate(['documentos-liquid']);
  }

  GotoDocumenosCertificado() {
    this._router.navigate(['documentos-certificado']);
  }

  

}
