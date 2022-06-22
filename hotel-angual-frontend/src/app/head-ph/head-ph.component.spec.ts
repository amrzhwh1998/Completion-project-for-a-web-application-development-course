import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPhComponent } from './head-ph.component';

describe('HeadPhComponent', () => {
  let component: HeadPhComponent;
  let fixture: ComponentFixture<HeadPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadPhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
