import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHostelComponent } from './about-hostel.component';

describe('AboutHostelComponent', () => {
  let component: AboutHostelComponent;
  let fixture: ComponentFixture<AboutHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHostelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
