import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassiordersmenuComponent } from './kassiordersmenu.component';

describe('KassiordersmenuComponent', () => {
  let component: KassiordersmenuComponent;
  let fixture: ComponentFixture<KassiordersmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassiordersmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassiordersmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
