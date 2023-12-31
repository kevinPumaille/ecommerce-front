import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombresPagesComponent } from './hombres-pages.component';

describe('HombresPagesComponent', () => {
  let component: HombresPagesComponent;
  let fixture: ComponentFixture<HombresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HombresPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HombresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
