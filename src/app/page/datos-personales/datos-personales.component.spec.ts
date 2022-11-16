import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import { of } from 'rxjs';
import { DatosPersonalesComponent } from './datos-personales.component';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';

describe('DatosPersonalesComponent', () => {
  let service: UsuarioServicesService;
  let httpMock: HttpClientTestingModule;
  let usuario: Usuario;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioServicesService],
    });
    service = TestBed.inject(UsuarioServicesService);
    httpMock = TestBed.inject<any>(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should delete the user', () => {
    spyOn(service, 'eliminar').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(true);
    service.eliminar(2);
    expect(service.eliminar).toHaveBeenCalled();
  });
  it('should not delete the user', () => {
    spyOn(service, 'eliminar').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(false);
    expect(service.eliminar).not.toHaveBeenCalled();
  });
  it('should update the user', () => {
    var newUser = {
      email: 'juli@gail.com',
      apellido: 'Gomez',
      username: 'juli',
      password: '77777'
    } as Usuario;
    spyOn(service, 'actualizar').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(true);
    service.actualizar(newUser);
    expect(service.actualizar).toHaveBeenCalled();
  });
  it('should not update the user', () => {
    var newUser = {
      email: 'juli@gail.com',
      apellido: 'Gomez',
      username: 'juli',
      password: '77777'
    } as Usuario;
    spyOn(service, 'actualizar').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(false);
    expect(service.actualizar).not.toHaveBeenCalled();
  });
});
