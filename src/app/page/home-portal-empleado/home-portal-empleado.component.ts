import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';


@Component({
  selector: 'app-home-portal-empleado',
  templateUrl: './home-portal-empleado.component.html',
  styleUrls: ['./home-portal-empleado.component.css']
})
export class HomePortalEmpleadoComponent implements OnInit {
  public id: any = "";
  public usuario3: any;

  constructor(private _router: Router, private _ar: ActivatedRoute,  private _usuarioService: UsuarioServicesService) { 

  }

  ngOnInit(): void {   

  }

  
  

  

  


}
