import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UsuarioServicesService {
  private api = environment.apiUrl + '/contratacion';

  constructor(private http: HttpClient) {}

  // REGISTRO DE USUARIO
  registrarUsuario(datos: {nombre: string, apellido: string, correo: string, contrasena: string}): Observable<any> {
    return this.http.post(`${this.api}/registro-candidato/`, {
      primer_nombre: datos.nombre,
      primer_apellido: datos.apellido,
      email: datos.correo,
      password: datos.contrasena
    });
  }

  // LOGIN DE USUARIO
  loginUsuario(datos: {correo: string, contrasena: string}): Observable<any> {
    // El backend espera { email, password }
    return this.http.post(`${this.api}/login-candidato/`, {
      email: datos.correo,
      password: datos.contrasena
    });
  }

  // BUSCAR EMAIL
  buscarEmail(email: string): Observable<any> {
    return this.http.post(`${this.api}/buscar-email-candidato/`, { email });
  }

  // CAMBIAR CONTRASEÑA POR EMAIL
  cambiarContrasena(email: string, nueva_contrasena: string): Observable<any> {
    // Asegúrate que la URL coincida con la de tu backend, puede ser 'cambiar-contrasena-candidato-email'
    return this.http.post(`${this.api}/cambiar-contrasena-candidato-email/`, { email, nueva_contrasena });
  }

  // Sesión local (opcional)
  setUsuarioLogueado(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuarioLogueado() {
    const u = localStorage.getItem('usuario');
    return u ? JSON.parse(u) : null;
  }

  logoutUsuario() {
    localStorage.removeItem('usuario');
  }

  enviarFormularioContratacion(data: any): Observable<any> {
    // Asegúrate que el endpoint exista en tu backend
    return this.http.post(`${this.api}/formulario-contratacion/`, data);
  }
}
