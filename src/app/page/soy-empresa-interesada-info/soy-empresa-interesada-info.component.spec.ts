import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyEmpresaInteresadaInfoComponent } from './soy-empresa-interesada-info.component';

describe('SoyEmpresaInteresadaInfoComponent', () => {
  let component: SoyEmpresaInteresadaInfoComponent;
  let fixture: ComponentFixture<SoyEmpresaInteresadaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoyEmpresaInteresadaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoyEmpresaInteresadaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
