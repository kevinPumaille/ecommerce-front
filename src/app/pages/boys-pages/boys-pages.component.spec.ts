import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysPagesComponent } from './boys-pages.component';

describe('BoysPagesComponent', () => {
  let component: BoysPagesComponent;
  let fixture: ComponentFixture<BoysPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoysPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoysPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
