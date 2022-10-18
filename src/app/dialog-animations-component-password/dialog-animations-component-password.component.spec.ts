import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimationsComponentPasswordComponent } from './dialog-animations-component-password.component';

describe('DialogAnimationsComponentPasswordComponent', () => {
  let component: DialogAnimationsComponentPasswordComponent;
  let fixture: ComponentFixture<DialogAnimationsComponentPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnimationsComponentPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAnimationsComponentPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
