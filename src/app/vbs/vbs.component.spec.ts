import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbsComponent } from './vbs.component';

describe('VbsComponent', () => {
  let component: VbsComponent;
  let fixture: ComponentFixture<VbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VbsComponent]
    });
    fixture = TestBed.createComponent(VbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
