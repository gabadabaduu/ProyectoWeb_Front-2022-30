import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionPortalEmpleadoComponent } from './formacion-portal-empleado.component';

describe('FormacionPortalEmpleadoComponent', () => {
  let component: FormacionPortalEmpleadoComponent;
  let fixture: ComponentFixture<FormacionPortalEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionPortalEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionPortalEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
