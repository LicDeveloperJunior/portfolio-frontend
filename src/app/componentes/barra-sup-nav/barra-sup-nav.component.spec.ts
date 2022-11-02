import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSupNavComponent } from './barra-sup-nav.component';

describe('BarraSupNavComponent', () => {
  let component: BarraSupNavComponent;
  let fixture: ComponentFixture<BarraSupNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSupNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraSupNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crearse BarraSupNavComponent', () => {
    expect(component).toBeTruthy();
  });
});
