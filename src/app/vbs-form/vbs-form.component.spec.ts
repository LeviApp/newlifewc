import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbsFormComponent } from './vbs-form.component';

describe('VbsFormComponent', () => {
  let component: VbsFormComponent;
  let fixture: ComponentFixture<VbsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VbsFormComponent]
    });
    fixture = TestBed.createComponent(VbsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
