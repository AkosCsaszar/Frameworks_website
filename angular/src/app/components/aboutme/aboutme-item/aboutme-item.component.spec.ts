import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeItemComponent } from './aboutme-item.component';

describe('AboutmeItemComponent', () => {
  let component: AboutmeItemComponent;
  let fixture: ComponentFixture<AboutmeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
