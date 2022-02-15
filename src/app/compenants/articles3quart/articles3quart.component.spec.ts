import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articles3quartComponent } from './articles3quart.component';

describe('Articles3quartComponent', () => {
  let component: Articles3quartComponent;
  let fixture: ComponentFixture<Articles3quartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articles3quartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articles3quartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
