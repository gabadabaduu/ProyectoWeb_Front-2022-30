import { Component, OnInit } from '@angular/core';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';



@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.component.html',
  styleUrls: ['./list-documentos.component.css']
})
export class ListDocumentosComponent implements OnInit {
  public listUsuarios: any = [];
  constructor( private _usuarioService: UsuarioServicesService) { }
  public page: any;
  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this._usuarioService.getAll()
    .subscribe(data=>this.listUsuarios = data);
  }


}
