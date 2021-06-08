import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfInputComponent } from './isf-input.component';

describe('IsfInputComponent', () => {
  let component: IsfInputComponent;
  let fixture: ComponentFixture<IsfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
