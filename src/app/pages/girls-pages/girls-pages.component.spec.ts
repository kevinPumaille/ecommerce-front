import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsPagesComponent } from './girls-pages.component';

describe('GirlsPagesComponent', () => {
  let component: GirlsPagesComponent;
  let fixture: ComponentFixture<GirlsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
