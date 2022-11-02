import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BarraLatNavComponent } from './barra-lat-nav.component';

describe('Test BarraLatNavComponent', () => {
  let component: BarraLatNavComponent;
  let fixture: ComponentFixture<BarraLatNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLatNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el componente BarraLatNavComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia actualizarse el atributo cuando se hace click', () => {
    fixture = TestBed.createComponent(BarraLatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const listaItems = fixture.debugElement.queryAll(By.css('a.btn-nav-lat'));
    for (let item of listaItems) {
      item.nativeElement.click();
      expect(item.nativeElement.getAttribute('activado')).toBeTruthy();
    }
  });
});
