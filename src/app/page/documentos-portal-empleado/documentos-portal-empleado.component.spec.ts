import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPortalEmpleadoComponent } from './documentos-portal-empleado.component';

describe('DocumentosPortalEmpleadoComponent', () => {
  let component: DocumentosPortalEmpleadoComponent;
  let fixture: ComponentFixture<DocumentosPortalEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosPortalEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosPortalEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
