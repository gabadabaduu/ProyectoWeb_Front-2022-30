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
    this.id = this._ar.snapshot.paramMap.get('id');
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

  DescargarContraro() {
    this._usuarioService.isLoggedIn();
    console.log(this.id);
    this._usuarioService.Contrato(this.id).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  DescargarCertificado() {
    this._usuarioService.isLoggedIn();
    console.log(this.id);
    this._usuarioService.Certificado(this.id).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
