import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDivComponent } from './icons-div.component';

describe('IconsDivComponent', () => {
  let component: IconsDivComponent;
  let fixture: ComponentFixture<IconsDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
