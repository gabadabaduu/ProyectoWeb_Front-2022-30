import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { BehaviorSubject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServicesService {
  private apiUrlContratacion = 'http://localhost:3000/api/contratacion';
  private apiUrlUsuario = 'http://localhost:3000/api/usuario';

  private usuarioLogueadoSubject = new BehaviorSubject<any>(null);
  usuarioLogueado$ = this.usuarioLogueadoSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 1. Crear usuario nuevo
  registrarUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrlUsuario}/register`, data);
  }

  // 2. Log in usuario
  loginUsuario(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrlUsuario}/login`, credentials);
  }

  // 3. Log out usuario (ejemplo: solo borra el token del LocalStorage)
  logoutUsuario(): void {
    localStorage.removeItem('token');
    this.usuarioLogueadoSubject.next(null);
  }

  // 4. Enviar datos del formulario y guardar la info asociada al usuario
  enviarFormularioContratacion(data: any): Observable<any> {
    // Puedes incluir el id del usuario, token o email si lo necesitas
    return this.http.post(`${this.apiUrlContratacion}/registro`, data);
  }

  // 5. Guardar usuario autenticado en el servicio (ejemplo para usar en otros componentes)
  setUsuarioLogueado(usuario: any): void {
    this.usuarioLogueadoSubject.next(usuario);
  }

  getUsuarioLogueado(): any {
    return this.usuarioLogueadoSubject.value;
  }

    // Solicitud de recuperación de contraseña
  solicitarRecuperacionPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrlUsuario}/request-password-reset`, { email });
  }

  // Cambiar contraseña usando el token
  cambiarPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrlUsuario}/reset-password`, { token, newPassword });
  }
}
