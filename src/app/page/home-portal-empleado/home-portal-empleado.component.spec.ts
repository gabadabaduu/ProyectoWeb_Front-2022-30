import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortalEmpleadoComponent } from './home-portal-empleado.component';

describe('HomePortalEmpleadoComponent', () => {
  let component: HomePortalEmpleadoComponent;
  let fixture: ComponentFixture<HomePortalEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePortalEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePortalEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
