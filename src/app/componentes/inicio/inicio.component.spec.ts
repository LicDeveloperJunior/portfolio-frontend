import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse InicioComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar los datos', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const inicio = fixture.componentInstance;
    expect(inicio.datos).toBeTruthy();
  });
});
