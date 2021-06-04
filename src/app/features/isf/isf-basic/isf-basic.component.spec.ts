import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfBasicComponent } from './isf-basic.component';

describe('IsfBasicComponent', () => {
  let component: IsfBasicComponent;
  let fixture: ComponentFixture<IsfBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
