import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyLoginTrabajadorHomeComponent } from './soy-login-trabajador-home.component';

describe('SoyLoginTrabajadorHomeComponent', () => {
  let component: SoyLoginTrabajadorHomeComponent;
  let fixture: ComponentFixture<SoyLoginTrabajadorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoyLoginTrabajadorHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoyLoginTrabajadorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
