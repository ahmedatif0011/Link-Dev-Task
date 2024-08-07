import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchModifyComponent } from './branch-modify.component';

describe('BranchModifyComponent', () => {
  let component: BranchModifyComponent;
  let fixture: ComponentFixture<BranchModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
