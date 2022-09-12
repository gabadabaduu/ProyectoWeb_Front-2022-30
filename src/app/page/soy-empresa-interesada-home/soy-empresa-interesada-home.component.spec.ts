import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyEmpresaInteresadaHomeComponent } from './soy-empresa-interesada-home.component';

describe('SoyEmpresaInteresadaHomeComponent', () => {
  let component: SoyEmpresaInteresadaHomeComponent;
  let fixture: ComponentFixture<SoyEmpresaInteresadaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoyEmpresaInteresadaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoyEmpresaInteresadaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
