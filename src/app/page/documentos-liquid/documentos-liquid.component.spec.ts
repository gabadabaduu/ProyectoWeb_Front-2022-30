import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosLiquidComponent } from './documentos-liquid.component';

describe('DocumentosLiquidComponent', () => {
  let component: DocumentosLiquidComponent;
  let fixture: ComponentFixture<DocumentosLiquidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosLiquidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosLiquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
