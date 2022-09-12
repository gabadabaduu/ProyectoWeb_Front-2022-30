import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosCertificacionesComponent } from './documentos-certificaciones.component';

describe('DocumentosCertificacionesComponent', () => {
  let component: DocumentosCertificacionesComponent;
  let fixture: ComponentFixture<DocumentosCertificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosCertificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosCertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
