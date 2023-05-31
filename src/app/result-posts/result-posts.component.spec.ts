import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPostsComponent } from './result-posts.component';

describe('ResultPostsComponent', () => {
  let component: ResultPostsComponent;
  let fixture: ComponentFixture<ResultPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
