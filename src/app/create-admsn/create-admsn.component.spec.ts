import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdmsnComponent } from './create-admsn.component';

describe('CreateAdmsnComponent', () => {
  let component: CreateAdmsnComponent;
  let fixture: ComponentFixture<CreateAdmsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdmsnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdmsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
