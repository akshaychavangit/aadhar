import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAadharComponent } from './view-aadhar.component';

describe('ViewAadharComponent', () => {
  let component: ViewAadharComponent;
  let fixture: ComponentFixture<ViewAadharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAadharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
