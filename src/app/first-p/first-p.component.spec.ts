import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPComponent } from './first-p.component';

describe('FirstPComponent', () => {
  let component: FirstPComponent;
  let fixture: ComponentFixture<FirstPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
