import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleslisteComponentComponent } from './articlesliste-component.component';

describe('ArticleslisteComponentComponent', () => {
  let component: ArticleslisteComponentComponent;
  let fixture: ComponentFixture<ArticleslisteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleslisteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleslisteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
