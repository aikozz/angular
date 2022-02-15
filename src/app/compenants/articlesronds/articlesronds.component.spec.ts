import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesrondsComponent } from './articlesronds.component';

describe('ArticlesrondsComponent', () => {
  let component: ArticlesrondsComponent;
  let fixture: ComponentFixture<ArticlesrondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesrondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesrondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
