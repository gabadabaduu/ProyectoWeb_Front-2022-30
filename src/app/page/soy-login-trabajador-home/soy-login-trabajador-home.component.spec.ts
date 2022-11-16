import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';
import { inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SoyLoginTrabajadorHomeComponent } from './soy-login-trabajador-home.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SoyLoginTrabajadorHomeComponent', () => {
  let service: UsuarioServicesService;
  let fixture: ComponentFixture<UsuarioServicesService>;
  let component: SoyLoginTrabajadorHomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioServicesService]
    });
    service = TestBed.inject(UsuarioServicesService);
  });
  function updateForm() {
    component.loginData.username = "prueba3";
    component.loginData.password = "1234567";
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should perform login correctly', () => {
    service.isLoggedIn();
    expect(service.isLoggedIn).toBeTruthy();
  })
});
