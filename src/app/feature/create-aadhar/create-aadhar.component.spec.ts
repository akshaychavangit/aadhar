import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAadharComponent } from './create-aadhar.component';

describe('CreateAadharComponent', () => {
  let component: CreateAadharComponent;
  let fixture: ComponentFixture<CreateAadharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAadharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
