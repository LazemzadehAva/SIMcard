import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSimComponent } from './add-new-sim.component';

describe('AddNewSimComponent', () => {
  let component: AddNewSimComponent;
  let fixture: ComponentFixture<AddNewSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
