import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { URLUsuario } from 'src/environments/environment';
import { Usuario } from 'src/app/model/usuario';
import { BehaviorSubject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UsuarioServicesService {
  private _itsLoggedIn$ = new BehaviorSubject<boolean>(false);

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  public http_server_base: any = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }
 

  save(usuario: Usuario) {
    //console.log(usuario);
    return this.http.post<Response>(this.http_server_base + URLUsuario.urlSave, usuario);
  }

  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${this.http_server_base}/generate-token`,loginData);
  }

  public getCurrentUser(){
    return this.http.get(`${this.http_server_base}/actual-usuario`);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }
  //cerranis sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

}
