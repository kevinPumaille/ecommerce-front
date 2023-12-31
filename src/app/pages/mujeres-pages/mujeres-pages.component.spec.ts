import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujeresPagesComponent } from './mujeres-pages.component';

describe('MujeresPagesComponent', () => {
  let component: MujeresPagesComponent;
  let fixture: ComponentFixture<MujeresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MujeresPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MujeresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
