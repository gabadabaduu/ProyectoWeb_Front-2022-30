import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioServicesService } from './usuario-services.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor(private _usuarioService: UsuarioServicesService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let autReq = req;
    const token = this._usuarioService.getToken();
    if(token != null){
      autReq = req.clone({setHeaders: {'Authorization': `Bearer ${token}`}});
    }
    return next.handle(autReq);
  }



}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
