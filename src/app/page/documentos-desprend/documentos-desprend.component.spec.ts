import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosDesprendComponent } from './documentos-desprend.component';

describe('DocumentosDesprendComponent', () => {
  let component: DocumentosDesprendComponent;
  let fixture: ComponentFixture<DocumentosDesprendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosDesprendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosDesprendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
