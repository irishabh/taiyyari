import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestJobComponent } from './latest-job.component';

describe('LatestJobComponent', () => {
  let component: LatestJobComponent;
  let fixture: ComponentFixture<LatestJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
